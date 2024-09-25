import js from '@eslint/js'; // ESLint 기본 규칙
import globals from 'globals'; // 브라우저 글로벌 변수
import reactHooks from 'eslint-plugin-react-hooks'; // React Hooks 규칙
import reactRefresh from 'eslint-plugin-react-refresh'; // React Fast Refresh 규칙
import tseslint from '@typescript-eslint/eslint-plugin'; // TypeScript ESLint 플러그인
import figmaPlugin from '@figma/eslint-plugin-figma-plugins'; // Figma 플러그인 규칙

export default [
  {
    ignores: ['dist'], // dist 폴더 무시 (기본 설정)
  },
  {
    extends: [
      js.configs.recommended, // JavaScript 기본 권장 규칙
      ...tseslint.configs.recommended, // TypeScript 권장 규칙
      figmaPlugin.configs.recommended, // Figma 플러그인 권장 규칙 (맨 뒤에 배치)
    ],
    files: ['**/*.{ts,tsx}'], // TypeScript 및 TSX 파일에 규칙 적용
    languageOptions: {
      ecmaVersion: 2020, // 최신 ECMAScript 버전 사용
      globals: globals.browser, // 브라우저 전역 변수 사용
    },
    //from figma template
    parser: '@typescript-eslint/parser', // TypeScript 파서 설정
    //from figma template
    parserOptions: {
      project: './tsconfig.json', // TypeScript 프로젝트 설정 파일 지정
    },
    //from figma template
    root: true, // 최상위 설정 파일로 사용
    plugins: {
      'react-hooks': reactHooks, // React Hooks 규칙 적용
      'react-refresh': reactRefresh, // React Fast Refresh 규칙 적용
    },
    rules: {
      ...reactHooks.configs.recommended.rules, // React Hooks 권장 규칙
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }, // React Refresh에서 상수 export 허용
      ],
      //from figma template
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_', // `_`로 시작하는 인수 무시
          varsIgnorePattern: '^_', // `_`로 시작하는 변수 무시
          caughtErrorsIgnorePattern: '^_', // `_`로 시작하는 에러 무시
        },
      ],
    },
  },
];
