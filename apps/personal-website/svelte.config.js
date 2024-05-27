import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/kit/vite';

import { escapeSvelte, mdsvex } from 'mdsvex';
import shiki from 'shiki';

//Remark plugins
import remarkUnwrapImages from 'remark-unwrap-images';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
  remarkPlugins: [remarkUnwrapImages, [remarkToc, { tight: true }]],
  rehypePlugins: [rehypeSlug],
  extensions: ['.md'],
  highlight: {
    highlighter: async (code, lang = 'text') => {
      const highlighter = await shiki.getHighlighter({ theme: 'monokai' });
      const html = escapeSvelte(highlighter.codeToHtml(code, { lang }));
      return `{@html \`${html}\` }`;
    }
  }
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
  preprocess: [vitePreprocess({}), mdsvex(mdsvexOptions)],

  kit: {
    adapter: adapter()
  },
  //preprocess: vitePreprocess()
  vitePlugin: {
    inspector: true
  }
};
export default config;
