
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '600px',
        md: '728px',
        lg: '900px',
        xl: '1185px'
        // '2xl': '1496px',
      },
    }, 
    extend: {
      boxShadow: {
        main: 'var(--shadow-main)'
      },
      colors: {
        primary: 'var(--primary)',
        danger: 'var(--danger)',
        warning: 'var(--warning)',
        secondary: 'var(--secondary)'
      }
    },
  },
  plugins: [],
};
