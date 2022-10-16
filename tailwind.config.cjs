/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {

    fontSize: {
      xs:14,
      sm: 16,
      md: 18,
      lg: 28,
      xl:  24,
      '2xl':32,
      },
    colors:{
      'cyano' :'#1DA5AD',
      'white' : '#FFFFFF ',
      'rover' : '#0E6166',
      'trasnparent': 'transparent',

       gray:{
        bg:'#09090A',
        tx: '#716D6D',
        bgInput: '#202024'
       }
       
   


    },
    extend: {
        fontFamily:{
          sans: 'inter, sans-serif'
        }
    },
  },
  plugins: [],
}
