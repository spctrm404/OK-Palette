import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, './src/backend/main.ts'),
      fileName: 'backend',
      formats: ['es'],
    },
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: false,
  },
});
