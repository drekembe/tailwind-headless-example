module.exports = {
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--color-primary) / <alpha-value>)',
      },
    },
  },
  plugins: [
    require('tailwindcss/plugin')(({ addVariant }) => {
      addVariant('compact', '&:is(.compact *)');
    }),
  ],
};
