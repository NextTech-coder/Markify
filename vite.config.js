import {defineConfig} from "vite";
export default defineConfig({
    root: 'src',
    build: {
        lib: {
            entry: 'main.js',
            name: 'Markify',
            fileName: 'markify',
            formats: ['es']
        },
        outDir: '../dist'
    }
})