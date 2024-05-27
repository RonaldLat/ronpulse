import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  // --- ✁ snip
  ssr: {
    noExternal: ['gsap', '@gsap/member']
  }
});
