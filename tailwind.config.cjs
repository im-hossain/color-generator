/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  plugins: [],
  safelist: [
    {
      pattern: /bg-/,
      variants: ['lg', 'hover', 'focus', 'lg:hover'],
    }
],
};