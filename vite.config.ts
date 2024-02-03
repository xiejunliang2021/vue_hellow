import { fileURLToPath, URL } from 'node:url'

import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     vue(),
//     vueJsx(),
//     VueSetupExtend(),
//   ],
//   resolve: {
//     alias: {
//       '@': fileURLToPath(new URL('./src', import.meta.url))
//     }
//   }
// })

export default defineConfig(({command, mode}) => {

  const env = loadEnv(mode, process.cwd(), '')
  return{
    plugins: [
          vue(),
          vueJsx(),
          VueSetupExtend(),
        ],
        resolve: {
          alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
          }

        },
        server: {
          host: '0.0.0.0',
          port: Number(env.VITE_APP_PORT),
          proxy: {
            "api": {
              target: env.VITE_APP_API_BASEURL,
              changeOrigin: true,
              rewrite: (path) => path.replace(/^\/api/, ""),
            }
          }
        }

  }
  
})
