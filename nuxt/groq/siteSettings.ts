export const findAll = () => groq`*[_type == 'siteSettings'][0]{navBarItems[]->}`
