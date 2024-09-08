import type {Category, Slug} from './schema'

export interface DisplayCategory extends Category {
  slug: Slug
}
