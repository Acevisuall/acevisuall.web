const feedFields = '{title, slug, featuredImage, category->{_id, name, slug}}'

export const findAll = () => `*[_type == 'project']${feedFields}|order(publishedAt desc)`

export const findAllByCategory = () =>
  `*[_type == 'project' && category->slug.current == $category]${feedFields}|order(publishedAt desc)`
