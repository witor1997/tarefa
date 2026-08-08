import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

const rootDir = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      react: path.join(rootDir, 'node_modules/react'),
      'react/jsx-runtime': path.join(rootDir, 'node_modules/react/jsx-runtime.js'),
      'react/jsx-dev-runtime': path.join(rootDir, 'node_modules/react/jsx-dev-runtime.js'),
      'react-dom': path.join(rootDir, 'node_modules/react-dom'),
      'react-dom/client': path.join(rootDir, 'node_modules/react-dom/client.js'),
      '@/': path.join(rootDir, 'src/'),
    },
    dedupe: ['react', 'react-dom'],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/teste/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    server: {
      deps: {
        inline: ['react', 'react-dom', '@testing-library/react', '@testing-library/jest-dom'],
      },
    },
  },
});
