/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {      
      colors: {
      "element-base": "var(--default-color)",
      nwsmain:{
        DEFAULT: '#1D59D1'
      },
      nwshover:{
        DEFAULT: '#0744BE'
      },
      nwsfooter:{
        DEFAULT: '#363636'
      },
    },
    fontFamily: { 
      'sans': ['Helvetica', 'Arial', 'sans-serif']
    },
    screens: {
      'hover-hover': {'raw': '(hover: hover)'},
      'widescreen': { 'raw': '(min-aspect-ratio: 3/2)' },
      'tallscreen': { 'raw': '(max-aspect-ratio: 13/20)' },
},

keyframes:{
  'open-menu':{
    '0%':{
      transform: 'scaleY(0)',
    },
    '80%':{
      transform: 'scaleY(1.2)',
    },
    '100%':{
      transform: 'scaleY(1)',
    }
  }
},
animation:{
  'open-menu': 'open-menu 0.5s ease-in-out forwards'
}
  },
  },
  plugins: [],
}

