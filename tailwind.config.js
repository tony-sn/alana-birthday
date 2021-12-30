module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '440px',
      // => @media (min-width: 440px) { ... }

      'md': '512px',
      // => @media (min-width: 512px) { ... }

      'lg': '768px',
      // => @media (min-width: 768px) { ... }

      'xl': '1024px',
      // => @media (min-width: 1024px) { ... }

      '2xl': '1680px',
      // => @media (min-width: 1680px) { ... }
    },
    extend: {},
  },
  plugins: [],
}
