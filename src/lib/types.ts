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

export type Post = {
	title: string
	slug: string
	description: string
	date: string
	categories: Category[]
	published: boolean
}
