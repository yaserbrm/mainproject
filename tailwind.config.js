/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
    theme: { 
      
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
      fontFamily: {
        'Holispay':'Holispay',

        'MorabbaUltraLight':'MorabbaUltraLight',
        'MorabbaLight':'MorabbaLight',
        'MorabbaHeavy':'MorabbaHeavy',
        'MorabbaBold':'MorabbaBold',
        'MorabbaMedium':'MorabbaMedium',
        'MorabbaRegular':'MorabbaRegular',
        'MorabbaSemiBold':'MorabbaSemiBold',
        'MorabbaBlack':'MorabbaBlack',
        'MorabbaExtraBold':'MorabbaExtraBold',

        'IranYekanBlack':'IranYekanBlack',
        'IranYekanExtrablack':'IranYekanExtrablack',
        'IranYekanExtrabold':'IranYekanExtrabold',
        'IranYekanBold':'IranYekanBold',
        'IranYekanLight':'IranYekanLight',
        'IranYekanMedium':'IranYekanMedium',
        'IranYekanRegular':'IranYekanRegular',
        'IranYekanThin':'IranYekanThin',
      },
      extend: {
        colors: {
          'c25': '#252525',
          'cf': '#ffffff',
          'cd6': '#D6D6D6',
          'cRed': '#A71218',
          'cblack': '#101420',
          'ce': '#EEEEEE',
          'cd8': '#D8D8D8',
          'cf4': '#F4F4F4',
          'ce5': '#E5E5E5',
          'c97': '#979797',
          'cGray': '#7E8285',
          'cDarkGray': '#999B9D',
          'c4c': '#4C4C4C',
          
        },
        backgroundImage: {
          // 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          // 'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
      },
    },
  plugins: [],
}
