import {defineField, defineType} from 'sanity'

export const aboutType = defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  options: {
    singleton: true, // Identify this document as a singleton
  },
  fields: [
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
        accept: 'image/jpeg',
      },
    }),
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
    defineField({
      name: 'ctaText',
      title: 'Call to Action Text',
      type: 'string',
    }),
    defineField({
      name: 'ctaLink',
      title: 'Call to Action Link',
      type: 'url',
    }),
  ],
})
