import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Replace 'solar-horizon' with your repository name if different
  // Set to '/' if you are deploying to username.github.io directly
  base: '/solar-horizon/',
})
