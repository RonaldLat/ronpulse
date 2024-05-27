/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px"
			}
		},
    extend: {
           colors: {
        // flowbite-svelte
        primary: {
          50: '#FFF5F2',
          100: '#FFF1EE',
          200: '#FFE4DE',
          300: '#FFD5CC',
          400: '#FFBCAD',
          500: '#FE795D',
          600: '#EF562F',
          700: '#EB4F27',
          800: '#CC4522',
          900: '#A5371B'
        },
        myColor: {
        '50': '#f6faf3',
        '100': '#e9f5e3',
        '200': '#d3eac8',
        '300': '#afd89d',
        '400': '#82bd69',
        '500': '#61a146',
        '600': '#4c8435',
        '700': '#3d692c',
        '800': '#345427',
        '900': '#2b4522',
        '950': '#13250e',
        '1000': '#82e600',
    },

      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'blackops':['Black Ops One'],
        'roboto':['Roboto','san-serif'],
        'maven':['Maven Pro','san-serif'],
        'caudex':['Caudex','serif'],
        'ubuntu':['Ubuntu','serif']
      },
    },
  },
   //plugins: [require('flowbite/plugin')],
}


