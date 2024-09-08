import {defineField, defineType} from 'sanity'

export const categoryType = defineType({
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URI',
      type: 'slug',
      description: 'Link to category /<category>',
      validation: (rule) => rule.required(),
      options: {
        source: 'name',
      },
    }),
  ],
})
