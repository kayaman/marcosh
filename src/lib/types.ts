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

export type Post = {
  title: string
  slug: string
  description: string
  date: string
  categories: Category[]
  published: boolean
}
