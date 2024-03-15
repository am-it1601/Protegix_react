import { resolve } from 'path';
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        fs: {
            cachedChecks: false,
        },
    },
    resolve: {
        alias: [
            { find: '@/types', replacement: resolve(__dirname, './types') },
            { find: '@', replacement: resolve(__dirname, './src') }],
    },
});
