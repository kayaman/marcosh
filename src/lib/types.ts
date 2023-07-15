export type Category =
  | 'svelte'
  | 'sveltekit'
  | 'javascript'
  | 'typescript'
  | 'css'
  | 'html'
  | 'other'
  | 'all'
  | 'none'
  | 't3stack'
  | 'blog'
  | 'pkm'
  | 'productivity'
  | 'career'
  | 'bookmarks'

export type Post = {
  title: string
  slug: string
  description: string
  date: string
  categories: Category[]
  published: boolean
}
