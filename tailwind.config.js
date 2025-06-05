module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        flip: {
          '0%': { transform: 'rotateX(0deg)', opacity: '1' },
          '50%': { transform: 'rotateX(-90deg)', opacity: '0' },
          '100%': { transform: 'rotateX(0deg)', opacity: '1' },
        },
      },
      animation: {
        flip: 'flip 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
};
