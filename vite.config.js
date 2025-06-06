import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from "vite-plugin-vuetify";
import {imagetools} from "vite-imagetools";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vuetify({autoImport: true}),
        imagetools()
    ],
    base: '/personal',
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        },
    },
})
