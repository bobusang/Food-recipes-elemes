module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      
      backgroundImage: {
        
        'mobile-pattern': "url('https://imgur.com/J62Vw8g.png')",
        'desktop-pattern': "url('https://imgur.com/ANTUhYk.png')",
        'catHover-pattern': "url('https://imgur.com/JpV6LjU.png')",
      },
      
      fontSize: {
        'head-sm': ['48px', '64px'],
        'p-sm': ['18px', '29px'],
        'subhead-sm': ['24px', '30px'],
        'prodTitle-sm': ['26px', '30px'],

        'link-md': ['14px', '22px'],
        'head-md': ['64px', '64px'],
        'badge': ['8px', '14px'],
        

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
        purple: {
          dark: "#405EB6",
          light: "#EAEEFA"
        },
        violet: {
          dark: "#B23F74",
          light: "#F9EEF3"
        },
        lime: {
          dark: "#A4B441",
          light: "#F3F7D9"
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
