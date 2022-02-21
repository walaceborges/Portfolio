module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        '8xl': '8.5rem',
        '9xl': '9.5rem',
        '10xl': '10rem',
      },
      fontFamily: {
        'mont-serrat': ['"Montserrat"', 'sans-serif'],
        'titillium-web': ['"Titillium Web"', 'sans-serif'],
        'inter': ['"Inter"', 'sans-serif'],
      },
      colors: {
        // color-1
        'middle-blue-green': '#87D1C3',
        'mettalic-seaweed': '#10BBD0',
        'powder-blue': '#B5E3DB',
        'rich-black': '#0B1120',
        'xiketic': '#080718',
        'vermillion': '#C84630',
        'languid-lavender': '#C4B7CB',
        'teste2': '#E7FAF7',
      },
    },
  },
  plugins: [],
}
