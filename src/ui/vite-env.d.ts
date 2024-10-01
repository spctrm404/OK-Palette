/// <reference types="vite/client" />
/// <reference types="vite-plugin-glsl/ext" />

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
