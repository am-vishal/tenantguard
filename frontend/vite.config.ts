import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Replace with your repo name
export default defineConfig({
  base: 'https://am-vishal.github.io/tenantguard', //yahan pe jo bhi repo ka naam hoga add karna hai!
  plugins: [react(), tailwindcss(),],
  server: {
    // historyApiFallback: true,
  }
});
