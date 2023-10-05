/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,astro}'],
	plugins: [require('tailwindcss-animate')],
}
