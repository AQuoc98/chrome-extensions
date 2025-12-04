import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Base Vite configuration for Chrome extensions in the monorepo
 * Individual packages can extend this configuration
 */
export const createBaseConfig = (options = {}) => {
  const { plugins = [], build = {} } = options

  return defineConfig(({ mode }) => {
    return {
      build: {
        emptyOutDir: true,
        outDir: 'build',
        rollupOptions: {
          output: {
            chunkFileNames: 'assets/chunk-[hash].js',
          },
        },
        ...build,
      },
      plugins: [react(), ...plugins],
      legacy: {
        skipWebSocketTokenCheck: true,
      },
    }
  })
}
