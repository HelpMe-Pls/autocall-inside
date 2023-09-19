import { defineConfig } from 'astro/config'

import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
	/* Dev mode */
	server: {
		port: 6996,
	},
	integrations: [react(), tailwind()],
})
