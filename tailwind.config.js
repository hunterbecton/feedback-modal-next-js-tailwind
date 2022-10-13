const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', ...fontFamily.sans],
      },
      boxShadow: {
        brand:
          '13px 114px 46px rgba(45, 29, 149, 0.01), 7px 64px 39px rgba(45, 29, 149, 0.03), 3px 28px 29px rgba(45, 29, 149, 0.04), 1px 7px 16px rgba(45, 29, 149, 0.05), 0px 0px 0px rgba(45, 29, 149, 0.05)',
      },
    },
    colors: {
      neutral: {
        one: '#FAFAFA',
        two: '#DDDCE0',
        three: '#C2C1C7',
        four: '#A8A7AF',
        five: '#8D8C97',
        six: '#73727E',
        seven: '#5B5A63',
        eight: '#424148',
        nine: '#2A292E',
        ten: '#111113',
      },
      brand: {
        one: '#F5F3FF',
        two: '#ECE9FE',
        three: '#DBD6FE',
        four: '#BFB5FD',
        five: '#9A8BFA',
        six: '#715CF6',
        seven: '#523AED',
        eight: '#4028D9',
        nine: '#3521B6',
        ten: '#2D1D95',
      },
      red: {
        one: '#FFF3F5',
        two: '#FEE9EC',
        three: '#FED6DD',
        four: '#FDB5C1',
        five: '#FA8B9E',
        six: '#F65C76',
        seven: '#ED3A58',
        eight: '#D92846',
        nine: '#B6213A',
        ten: '#951D31',
      },
    },
    fontSize: {
      'button-sm': [
        '1rem',
        {
          lineHeight: '1.5rem',
          fontWeight: '700',
        },
      ],
      'button-base': [
        '1.125rem',
        {
          lineHeight: '1.75rem',
          fontWeight: '700',
        },
      ],
      'headline-base': ['1.25rem', '1.75rem'],
      'headline-lg': ['1.5rem', '2rem'],
      'headline-xl': ['1.875rem', '2.25rem'],
      'headline-2xl': ['2.25rem', '2.5rem'],
      'headline-3xl': ['3rem', '1'],
      'headline-4xl': ['3.75rem', '1'],
      'paragraph-xs': ['0.75rem', '1rem'],
      'paragraph-sm': ['0.875rem', '1.25rem'],
      'paragraph-base': ['1rem', '1.5rem'],
      'paragraph-lg': ['1.125rem', '1.75rem'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
