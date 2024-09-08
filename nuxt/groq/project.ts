export const findAll = () =>
  `*[_type == 'project']{title, slug, featuredImage, category->{_id, name, slug}}|order(publishedAt desc)`
