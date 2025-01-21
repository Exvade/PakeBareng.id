/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      scale: {
        102: '1.02',
        99: '0.99',
        97: '0.97',
      },
      colors: {
        dark: '#0F191E',
        green: '#4EBD77',
      },
      fontFamily: {
        Poppins: 'Poppins',
      },
      boxShadow: {
        'custom-light': '0 1px 8px rgba(0, 0, 0, 0.06)',
        'custom-mild': '0 1px 8px rgba(0, 0, 0, 0.02)',
      },
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
};
