import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';
import VueDevTools from 'vite-plugin-vue-devtools';
import AutoImport from 'unplugin-auto-import/vite';
import Component from 'unplugin-vue-components/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueDevTools(),
    vuetify({ styles: 'sass' }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        { from: 'pinia', imports: ['defineStore', 'storeToRefs'] }
      ]
    }),
    Component({
      dts: true,
      globs: ['./src/components/base/**/*.vue']
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/variables.scss";`
      }
    }
  }
});
