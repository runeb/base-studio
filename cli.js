#!/usr/bin/env node
const path = require("path");
const {readFileSync, writeFileSync, writeFile} = require("fs")
const { exit } = require("process");
const [,, ...args] = process.argv
if (!args.length) {
  console.log("custom-start <schema.js>")
  exit(0)
}

let schemaPath = path.join(path.relative(__dirname, process.cwd()), args[0])

const sanityPath = path.resolve(__dirname, "sanity.master.json")
const sanity = JSON.parse(readFileSync(sanityPath, "utf8"))

if (!sanity.parts) {
  sanity.parts = []
}

const schemaPart = {
  name: "part:@sanity/base/schema",
  path: schemaPath
}

sanity.parts = sanity.parts.filter(p => p.name !== "part:@sanity/base/schema")
sanity.parts.push(schemaPart)

const outpath = path.resolve(__dirname, "sanity.json")
writeFileSync(outpath, JSON.stringify(sanity, null, 2), {
  encoding: "utf8"
})

require('child_process').execSync(
  'sanity start',
  {stdio: 'inherit', cwd: __dirname}
);
