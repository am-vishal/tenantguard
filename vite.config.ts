import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace with your repo name
export default defineConfig({
  base: '/', //yahan pe jo bhi repo ka naam hoga add karna hai!
  plugins: [react()],
  server: {
    // historyApiFallback: true,
  }
});
