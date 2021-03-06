import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteImpPlugin from 'vite-plugin-imp';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteImpPlugin({
      libList:[
        {
          libName:"antd",
          libDirectory:"es",
          style:(name)=> `antd/es/${name}/style` 
        }
      ]
    })
  ],
  css:{
    preprocessorOptions:{
      less:{
        javascriptEnabled:true
      }
    }
  }
})
