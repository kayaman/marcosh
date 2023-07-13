import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/kit/vite'
import { escapeSvelte, mdsvex } from 'mdsvex'
import shiki from 'shiki'
import remarkUnwrapImages from 'remark-unwrap-images'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexConfig = {
  extensions: ['.md'],
  layout: {
    _: './src/lib/layouts/mdsvex.svelte',
  },
  highlight: {
    highlighter: async (code, lang = 'text') => {
      const highlighter = await shiki.getHighlighter({ theme: 'poimandres' })
      const html = escapeSvelte(highlighter.codeToHtml(code, { lang }))
      return `{@html \`${html}\`}`
    },
  },
  remarkPlugins: [remarkUnwrapImages, [remarkToc, { tight: true }]],
  rehypePlugins: [rehypeSlug],
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
  preprocess: [vitePreprocess(), mdsvex(mdsvexConfig)],

  kit: {
    adapter: adapter(),
  },
}

export default config
