import {defineArrayMember, defineField, defineType} from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  options: {
    singleton: true, // Identify this document as a singleton
  },
  groups: [
    {
      name: 'navBar',
      title: 'Nav Bar',
      default: true,
    },
  ],
  fields: [
    defineField({
      name: 'navBarItems',
      title: 'Nav Bar Items',
      type: 'array',
      group: 'navBar',
      of: [
        defineArrayMember({
          type: 'reference',
          weak: true,
          options: {
            disableNew: true,
          },
          to: [
            {
              type: 'category',
            },
          ],
        }),
      ],
    }),
  ],
})
