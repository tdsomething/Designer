import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import unpluginVueComponents from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import unpluginAutoImport from 'unplugin-auto-import/vite'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  plugins: [
    vue(),
    unpluginAutoImport(),
    unpluginVueComponents({
      resolvers: [NaiveUiResolver()],
      dts: true
    })
  ]
})
