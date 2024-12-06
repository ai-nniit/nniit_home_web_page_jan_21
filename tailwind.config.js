/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0%' },
          '100%': { backgroundPosition: '200% 0%' },
        },
        'phone-ring': {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-15deg)' },
          '50%': { transform: 'rotate(15deg)' },
          '75%': { transform: 'rotate(-10deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        'gradient-move': {
                '0%': { backgroundPosition: '0% 50%' },
                '50%': { backgroundPosition: '50% 50%' },
                '100%': { backgroundPosition: '100% 50%' },
          },
      },
      backgroundSize: {
        'gradient-size': '200% 200%',
      },
      animation: {
        'phone-ring': 'phone-ring 1s infinite',
        gradient: 'gradient-move 3s infinite linear',
        shimmer: 'shimmer 10s infinite linear',
      },
      backgroundSize: {
        'shimmer-size': '200% 100%',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sans: ['Public Sans', 'sans-serif'],
      },
      colors: {
        primary: "#f7ba34",
        secondary: "#69a79c",
        light: "#f7f7f7",
        dark: "#333333",
        dark2: "#999999",
        dark3: "#c3cfe2",
        gradientStart: 'hsla(350, 23%, 90%, 1)', // Light Pinkish color
        gradientMiddle: 'hsla(34, 32%, 85%, 1)', // Light Beige color
        gradientEnd: 'hsla(36, 50%, 77%, 1)', // Light Yellow color
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
