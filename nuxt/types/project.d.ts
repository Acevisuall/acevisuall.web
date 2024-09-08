import type {DisplayCategory} from './category'
import type {Project, Slug} from './schema'

export interface QueryProject extends Project {
  category: DisplayCategory
}

export interface DisplayProject extends QueryProject {
  permalink: string
}
