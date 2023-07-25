// #TODO: implement this

// import type { Post } from '$lib/types'
// import { json } from '@sveltejs/kit'

// export async function GET() {
//   const posts = await getPostsByCategory(category)
//   return json(posts)
// }

// const getPostsByCategory = async (category) => {
//  let posts: Post[] = []

//   const paths = import.meta.glob('/src/posts/*.md', { eager: true })

//   for (const path in paths) {
//     const file = paths[path]
//     const slug = path.split('/').at(-1)?.replace('.md', '')

//     if (file && typeof file === 'object' && 'metadata' in file && slug) {
//       const metadata = file.metadata as Omit<Post, 'slug'>
//       const post = { ...metadata, slug } satisfies Post
//       post.categories.includes('study-notes') && post.published && posts.push(post)
//     }
//   }

//   posts = posts.sort(
//     (first, second) => new Date(second.date).getTime() - new Date(first.date).getTime(),
//   )

//   return posts

// }