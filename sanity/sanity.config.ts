import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {singletonTools} from 'sanity-plugin-singleton-tools'
import {media} from 'sanity-plugin-media'
import {schemaTypes} from './schemaTypes'
import {SetAndPublishAction} from './actions/SetAndPublishAction'

export default defineConfig({
  name: 'default',
  title: 'acevisuall',

  projectId: 'yj5ogbk2',
  dataset: process.env.NODE_ENV === 'development' ? 'development' : 'production',

  plugins: [structureTool(), visionTool(), singletonTools(), media()],

  schema: {
    types: schemaTypes,
  },

  document: {
    actions: (prev, context) => {
      const publishAction = ['project'].includes(context.schemaType) ? [SetAndPublishAction] : []

      return [...publishAction, ...prev]
    },
  },
})
