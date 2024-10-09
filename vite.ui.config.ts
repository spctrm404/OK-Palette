import { defineConfig } from 'vite';
import { resolve } from 'path';
import fs from 'fs';
import react from '@vitejs/plugin-react';
import glsl from 'vite-plugin-glsl';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
  plugins: [react(), glsl(), viteSingleFile()],
  root: './src/ui',
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: false,
    rollupOptions: {
      output: {
        plugins: [
          {
            name: 'copy-to-root',
            writeBundle({ dir }, bundle) {
              const rootOutputDir = resolve(__dirname, '.');
              if (dir)
                for (const fileName in bundle) {
                  const filePath = resolve(dir, fileName);
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
