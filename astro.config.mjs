import { defineConfig } from 'astro/config'

import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'

// https://docs.astro.build/en/reference/configuration-reference/#overview
export default defineConfig({
	/* Dev & preview mode */
	server: {
		port: 6996,
	},
	integrations: [react(), tailwind()],
})
