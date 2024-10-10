import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '~api': resolve(__dirname, 'src', 'api'),
      '~types': resolve(__dirname, 'src', 'types'),
      '~utils': resolve(__dirname, 'src', 'utils'),
    },
  },
  build: {
    minify: true,
    emptyOutDir: false,
    outDir: resolve(__dirname, 'dist'),
    target: 'es2015',
    rollupOptions: {
      input: {
        api: resolve(__dirname, 'src', 'api', 'code.ts'),
      },
      output: {
        entryFileNames: `[name].js`,
      },
    },
  },
});
