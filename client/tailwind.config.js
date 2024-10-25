/** @type {import('tailwindcss').Config} */
import {constant} from './src/config/constant'
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens:{
        ...constant.SCREENS
      },
      fontFamily:{
        ...constant.FONT
      },
    },
  },
  plugins: [],
}

