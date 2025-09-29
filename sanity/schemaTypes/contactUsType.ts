import {defineField, defineType} from 'sanity'

export const contactUsType = defineType({
  name: 'contactUs',
  title: 'Contact Us',
  type: 'document',
  options: {
    singleton: true, // Identify this document as a singleton
  },
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'intro',
      title: 'Intro Text',
      type: 'text',
    }),
  ],
})
