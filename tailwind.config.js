module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {    
    container: {
    padding: '2rem',
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
