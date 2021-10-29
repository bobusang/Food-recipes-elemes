module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding'
      },
      backgroundImage: {
        
        'mobile-pattern': "url('https://imgur.com/J62Vw8g.png')",
        'desktop-pattern': "url('https://imgur.com/wmRXXXz.png')",
        'catHover-pattern': "url('https://imgur.com/JpV6LjU.png')",
      },
      
      fontSize: {
        'head-sm': ['48px', '64px'],
        'p-sm': ['18px', '29px'],
        'subhead-sm': ['24px', '30px'],
        

      },
      colors: {
        green:{
          dark: "#8BAC3E",
          light: "#F0FEEB"
        },
        aqua: {
          dark: "#40A2B1",
          light: "#E6F3F5"
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ['hover', "focus"],
      height: ['hover', 'focus'],
    },
  },
  plugins: [],
}
