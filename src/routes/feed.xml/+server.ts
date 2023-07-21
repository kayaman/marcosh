import * as config from '$lib/config'
import type { Post } from '$lib/types'

export const prerender = true

export async function GET({ fetch }) {
  const response = await fetch('api/posts')
  const posts: Post[] = await response.json()

  const headers = { 'Content-Type': 'application/xml' }

  const xml = `
		<rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
			<channel>
				<title>${config.title}</title>
				<link>${config.url}</link>
				<description>${config.description}</description>
				<language>en-us</language>
				${posts
          .map(
            (post) => `
						<item>
							<title>${post.title}</title>
							<link>${config.url}/${post.slug}</link>
							<description>${post.description}</description>
							<author>${config.author}</author>
							<guid isPermaLink="true">${config.url}/${post.slug}</guid>
							<pubDate>${new Date(post.date).toUTCString()}</pubDate>
						</item>
					`,
          )
          .join('')}
			</channel>
		</rss>
	`.trim()

  return new Response(xml, { headers })
}
