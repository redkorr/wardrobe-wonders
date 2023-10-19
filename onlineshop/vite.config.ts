import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      pages: `${path.resolve(__dirname, './src/pages/')}`,
      utils: `${path.resolve(__dirname, './src/utils/')}`,
      components: `${path.resolve(__dirname, './src/components/')}`,
      assets: `${path.resolve(__dirname, './src/assets/')}`
    }
  }
});
