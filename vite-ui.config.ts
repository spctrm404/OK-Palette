import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';
import plainText from 'vite-plugin-virtual-plain-text';
import fs from 'fs'; // Node.js 파일 시스템 모듈
import path from 'path';
export default defineConfig({
  plugins: [
    react(),
    // plainText({ virtualNamespace: '@virtual:shaders/', dtsAutoGen: 'virtual-shaders-declaration' }),
    // {
    //   name: 'watch-external', // https://stackoverflow.com/questions/63373804/rollup-watch-include-directory/63548394#63548394
    //   async buildStart() {
    //     this.addWatchFile('./src/ui/shaders/utils.glsl')
    //     this.addWatchFile('./src/ui/shaders/library.glsl')
    //     this.addWatchFile('./src/ui/shaders/v_shader.glsl')
    //     this.addWatchFile('./src/ui/shaders/f_shader.glsl')
    //   }
    // },
    viteSingleFile(),
  ],
  root: './src/ui',
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: false,
    rollupOptions: {
      output: {
        plugins: [
          {
            name: 'copy-to-root',
            writeBundle(options, bundle) {
              const rootOutputDir = path.resolve(__dirname, '.');
              Object.keys(bundle).forEach((fileName) => {
                const filePath = path.resolve(
                  options.dir || __dirname,
                  fileName
                );
                const destPath = path.resolve(rootOutputDir, fileName);

                fs.copyFileSync(filePath, destPath);
                console.log(`Copied ${fileName} to root directory.`);
              });
            },
          },
        ],
      },
    },
  },
});
