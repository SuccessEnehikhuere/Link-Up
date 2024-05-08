/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-white': '#fff',
        'primary-color-light': '#737373',
        'dark-grey': '#333',
        'primary-btn-color': '#633CFF',
        'primary-bg': '#FAFAFA',
        'profile-bg': '#eeeeee',
        'dark-border-color': '#737373',
        'purple': '#633CFF',
				'red':'#FF3939',
        'active-nav-bg': '#efebff',
      },
    },
  },
  plugins: [],
}
