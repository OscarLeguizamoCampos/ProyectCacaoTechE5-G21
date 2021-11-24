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

    gray: {
      50: '#fcd7a6bd',
      100: '#f7fafc',
      200: '#edf2f7',
      300: '#e2e8f0',
      400: '#cbd5e0',
      500: '#a0aec0',
      600: '#718096',
      700: '#4a5568',
      800: '#2d3748',
      900: '#1a202c',
    },
  },
    extend: {},
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      xs: ['18px', '28px'],
      lg: ['20px', '28px'],
      xl: ['32px', '40px'],
    },
  },
  variants: {
    extend: {},
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
