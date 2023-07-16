import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { unheadVueComposablesImports } from '@unhead/vue'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({ 
      imports: ['vue', 'vue-router', unheadVueComposablesImports, 'pinia'],
       dts: './node_modules/.auto-imports-type/auto-imports.d.ts',
    }),
    Components({ 
      dts: './node_modules/.auto-imports-type/components.d.ts',
     }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
