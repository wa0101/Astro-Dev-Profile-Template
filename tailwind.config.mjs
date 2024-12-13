/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'profile-bg': '#0D1117',
        'card-bg': '#161B22',
        'card-hover': '#1C2129',
        'text-primary': '#E6EDF3',
        'text-secondary': '#7D8590',
        'accent-primary': '#00B368',
        'accent-secondary': '#00D67D',
        'graph-empty': '#161B22',
        'graph-l1': '#0E4429',
        'graph-l2': '#006D32',
        'graph-l3': '#26A641',
        'graph-l4': '#39D353',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
