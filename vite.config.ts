import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import unpluginVueComponents from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    unpluginVueComponents({
      resolvers: [NaiveUiResolver()],
      dts: true
    })
  ]
})
