const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {    
    container: {
    padding: '2rem',
  },
  colors: {
    transparent: 'transparent',
    current: 'currentColor',

    black: '#000',
    white: '#fff',
    orange: colors.orange,
    indigo: colors.indigo,
    yellow: colors.yellow,
    red: colors.red,
    pro: {
      50: '#fcd7a6bd',
      100: '#d16b18',
      200: '#d16b20'
      
    },
  },
    extend: {
      inset: {
        '100': '32cm',
       }
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      xs: ['18px', '28px'],
      lg: ['20px', '28px'],
      xl: ['32px', '40px'],
    },
  },
  variants: {
    extend: {
      textColor: ['visited'],
    },
    inset: ['hover', 'focus'],
    
  },
  plugins: [],
  screens: {
    'tablet': '640px',
    // => @media (min-width: 640px) { ... }

    'laptop': '1024px',
    // => @media (min-width: 1024px) { ... }

    'desktop': '1280px',
    // => @media (min-width: 1280px) { ... }
  },corePlugins: {
    // ...
   textDecoration: false,
  }
}
