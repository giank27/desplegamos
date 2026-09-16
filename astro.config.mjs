import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://giank27.github.io',
  base: '/desplegamos', // Ejemplo: '/desplegamos'
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['import', 'global-builtin', 'color-functions', 'if-function'],
        },
      },
    },
  },
});
