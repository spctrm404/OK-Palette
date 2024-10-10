import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    minify: true,
    emptyOutDir: false,
    outDir: resolve(__dirname, 'dist'),
    target: 'es2015',
    rollupOptions: {
      input: {
        api: resolve(__dirname, 'src', 'api', 'index.ts'),
      },
      output: {
        entryFileNames: `[name].js`,
      },
    },
  },
});
