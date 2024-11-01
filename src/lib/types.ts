export type Category =
  | 'aws'
  | 'cdk'
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
  | 'learning'
  | 'personal'
  | 'study-notes'
  | 'markdown'
  | 'course'
  | 'tdd'
  | 'psychology'
  | 'relationships'
  | 'sdlc'
  | 'containers'
  | 'docker'
  | 'kubernetes'

export type Post = {
  title: string
  slug: string
  description: string
  date: string
  categories: Category[]
  published: boolean
}
