import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { ViteFonts } from 'vite-plugin-fonts';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     react()
//   ],
// })
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // ViteFonts({
    //   google: {
    //     families: ['Amiri:ital,wght@0,400;0,700;1,400;1,700']
    //   }
    // })
  ]
});