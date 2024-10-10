import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';
import { viteSingleFile } from 'vite-plugin-singlefile';
import react from '@vitejs/plugin-react';
import glsl from 'vite-plugin-glsl';

export default defineConfig({
  plugins: [viteSingleFile(), react(), glsl()],
  root: './src/ui',
  build: {
    emptyOutDir: false,
    outDir: resolve(__dirname, 'dist'),
    target: 'es2015',
    rollupOptions: {
      output: {
        plugins: [
          {
            name: 'copy-to-root',
            writeBundle({ dir }, bundle) {
              const rootOutputDir = resolve(__dirname, '.');
              for (const fileName in bundle) {
                const filePath = resolve(dir as string, fileName);
                const destPath = resolve(rootOutputDir, fileName);
                fs.copyFileSync(filePath, destPath);
                console.log(`Copied ${fileName} to root directory.`);
              }
            },
          },
        ],
      },
    },
  },
});
