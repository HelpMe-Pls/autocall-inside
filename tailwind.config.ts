import { type Config } from "tailwindcss";
import animatePlugin from 'tailwindcss-animate'

export default {
	content: ["./src/**/*.{js,ts,jsx,tsx,astro}"],
	theme: {
		extend: {},
	},
	plugins: [animatePlugin],
} satisfies Config;
