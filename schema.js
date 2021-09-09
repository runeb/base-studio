import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

const doc = {
  type: "document",
  name: "local",
  title: "Local",
  fields: [
    {
      type: "string",
      name: "title"
    }
  ]
}

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    doc
  ]),
})
