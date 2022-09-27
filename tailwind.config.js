/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        darkPurple: "#1f0833"
      },

      fontFamily: {
        sans: ["Montserrat", "ui-sans-serif", "system-ui"],
        serif: ["ui-serif", "Georgia"],
        mono: ["ui-monospace", "SFMono-Regular"],
        AmaticSC: ["Amatic SC", "ui-sans-serif", "system-ui"],
      },

      keyframes: {
        slowSpin: {
          '0%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      animation: {
        'slowSpin': 'slowSpin 5s linear infinite',
      },
    },
  },
  plugins: [],
}
