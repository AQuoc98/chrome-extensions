import { crx } from '@crxjs/vite-plugin'
import manifest from './src/manifest.js'
import { createBaseConfig } from '../../vite.config.base.js'

// https://vitejs.dev/config/
export default createBaseConfig({
  plugins: [crx({ manifest })],
})
