import type {Category, SiteSettings} from './schema'

export interface SiteSettingsQuery extends SiteSettings {
  navBarItems: Category[]
}
