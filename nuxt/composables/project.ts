import type {DisplayProject, QueryProject} from '~/types/project'

export const useProject = (project: QueryProject): DisplayProject => {
  return {
    ...project,
    permalink: `/${project.category.slug.current}/${project.slug.current}`,
  }
}
