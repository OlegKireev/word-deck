// eslint-disable-next-line spaced-comment
/// <reference types="vitest" />
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';
import manifest from './manifest.json';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    TanStackRouterVite({
      routesDirectory: resolve(__dirname, './src/pages'),
    }),
    VitePWA({
      manifest,
      includeAssets: [
        'favicon.svg',
        'favicon.ico',
        'robots.txt',
        'apple-touch-icon.png',
      ],
      // switch to "true" to enable sw on development
      devOptions: {
        enabled: false,
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html}', '**/*.{svg,png,jpg,gif}'],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  test: {
    root: resolve(__dirname, './src'),
  },
  server: {
    port: 5200,
    host: true,
  },
  base: mode === 'development' ? '/' : 'https://olegkireev.github.io/word-deck',
}));
