import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import unpluginVueComponents from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import unpluginAutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    vue(),
    unpluginAutoImport(),
    unpluginVueComponents({
      resolvers: [NaiveUiResolver()],
      dts: true
    })
  ]
})
