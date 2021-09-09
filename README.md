Installing this studio as a dependency puts in into your `node_modules` folder.
The `custom-start <some-schema-file.js>` cli command essentially creates a version of `sanity start` that does this to the sanity.json

```json
"parts": [
    {
      "name": "part:@sanity/base/schema",
      "path": "../../some-schema-file.js"
    }
  ]
```
