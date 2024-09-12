import {ConfigContext} from 'sanity'
import {singletonDocumentListItems, filteredDocumentListItems} from 'sanity-plugin-singleton-tools'
import {StructureBuilder} from 'sanity/structure'

export const structure = (S: StructureBuilder, context: ConfigContext) => {
  const singletonItems = singletonDocumentListItems({S, context}) ?? []

  return S.list()
    .title('Ace Visuall')
    .items([
      ...filteredDocumentListItems({S, context}),
      S.divider(),
      // Create a list item for each singleton document in your schema that links directly to a document view
      ...singletonItems,
    ])
}
