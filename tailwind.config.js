/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#fdfbf7',
          100: '#f7f3eb',
          200: '#efe8da',
          300: '#e3d7c1',
          400: '#d5c4a5',
          900: '#3e3729',
        },
        olive: {
          50: '#f4f6f0',
          100: '#e5ebd9',
          200: '#cbd7b4',
          300: '#aabf8a',
          400: '#8ca465',
          500: '#6b7a40',
          600: '#556331',
          700: '#434e27',
          800: '#363f22',
          900: '#2d341e',
        },
        ink: {
          900: '#1c221e',
          700: '#38423c',
          500: '#5e6a62',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
