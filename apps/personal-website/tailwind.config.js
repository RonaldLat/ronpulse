import { skeleton } from '@skeletonlabs/tw-plugin';
import { join } from 'path';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './src/**/*.{html,js,svelte,ts}',
    // 3. Append the path to the Skeleton package
    join(
      require.resolve('@skeletonlabs/skeleton'),
      '../**/*.{html,js,svelte,ts}'
    )
  ],

  theme: {
    extend: {
      colors: {
        myColorBak: {
          50: '#f1fafe',
          100: '#e3f2fb',
          200: '#c0e6f7',
          300: '#89d3f0',
          400: '#4abce6',
          500: '#22a4d5',
          600: '#1484b5',
          700: '#116a93',
          800: '#125776',
          900: '#154b65',
          950: '#0e3043'
        },
        myColo: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd2fc',
          400: '#52c5f9',
          500: '#0ea4e9',
          600: '#0283c7',
          700: '#0368a1',
          800: '#075885',
          900: '#0c4a6e',
          950: '#082f49'
        },
        myColor: {
          50: '#f1f9fe',
          100: '#e2f2fc',
          200: '#bee5f9',
          300: '#85d0f4',
          400: '#43b9ed',
          500: '#1994cc',
          600: '#0e80bb',
          700: '#0c6698',
          800: '#0e577e',
          900: '#124868',
          950: '#0c2e45'
        }
      },
      fontFamily: {
        black: ['Black Ops One']
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    skeleton({
      themes: { preset: ['wintry'] }
    })
  ]
};
