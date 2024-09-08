import {defineArrayMember, defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  groups: [
    {
      name: 'main',
      title: 'Main',
      default: true,
    },
    {
      name: 'gallery',
      title: 'Gallery',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
      group: 'main',
    }),
    defineField({
      name: 'slug',
      title: 'URI',
      type: 'slug',
      description: 'Link to project /<category>/<uri>',
      validation: (rule) => rule.required(),
      group: 'main',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      group: 'main',
      validation: (rule) => rule.required(),
      to: [
        {
          type: 'category',
        },
      ],
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      group: 'main',
      options: {
        hotspot: true,
        accept: 'image/jpeg',
      },
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      description: 'Uses the title by default',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      group: 'seo',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      group: 'gallery',
      options: {
        layout: 'grid',
      },
      of: [
        defineArrayMember({
          type: 'image',
          name: 'image',
          title: 'Image',
          options: {
            accept: 'image/jpeg',
          },
        }),
        defineArrayMember({
          type: 'object',
          title: 'Video',
          name: 'video',
          fields: [
            defineField({
              name: 'file',
              title: 'Video File',
              type: 'file',
              validation: (rule) => rule.required(),
              options: {
                accept: 'video/mp4',
              },
            }),
            defineField({
              name: 'placeholder',
              title: 'Placeholder Image',
              description: 'Video fallback image',
              type: 'image',
              validation: (rule) => rule.required(),
              options: {
                accept: 'image/jpeg',
              },
            }),
          ],
          preview: {
            select: {
              media: 'placeholder',
              title: 'Video',
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'featuredImage',
    },
  },
})
