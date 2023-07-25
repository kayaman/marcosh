import { error } from '@sveltejs/kit'


export const load = async ({ params }) => {
  try {
    const post = await import(`../../../posts/${params.slug}.md`)
    return {
      content: post.default,
      meta: post.metadata,
    }
  } catch (e) {
    throw error(404, `Post not found ${params.slug}`)
  }
}
