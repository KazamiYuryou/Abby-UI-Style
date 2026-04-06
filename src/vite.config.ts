import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'AbbyUI',
      fileName: () => 'index.js',
      formats: ['iife'] // 输出适合在浏览器中直接运行的格式
    },
    outDir: 'dist',
    emptyOutDir: true
  }
});
