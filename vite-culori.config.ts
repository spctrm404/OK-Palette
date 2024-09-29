import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'node_modules/culori/bundled/culori.js'), // 올바른 번들 경로 지정
      formats: ['es'], // ESM 형식으로 번들링
      fileName: () => 'culori-bundle.mjs', // 출력 파일 이름
    },
    rollupOptions: {
      output: {
        dir: 'dist', // 출력 폴더
      },
    },
  },
});
