import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import unpluginVueComponents from 'unplugin-vue-components/vite'
import { NaiveUiResolver, HeadlessUiResolver } from 'unplugin-vue-components/resolvers'
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
      resolvers: [
        NaiveUiResolver(),
        HeadlessUiResolver({ prefix: '' })
        // (name) => {
        //   if (name === 'LockClosedIcon') {
        //     return { importName: name.slice(0), path: '@heroicons/vue/solid' }
        //   }
        // }
      ],
      dts: true
    })
  ]
})
