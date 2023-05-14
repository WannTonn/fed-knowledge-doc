import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  alias: {
    // '@': './src/**/*',
    // '@/images': './images/**/*'
  },
  themeConfig: {
    name: 'tonn-doc',
  },
  styles: [`.dumi-default-doc-layout {min-height: 100vh}`]
});
