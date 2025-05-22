module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryGreen: '#047857',  // emerald-700
        darkText: '#1F2937',      // gray-800
        lightBg: '#F9FAFB',       // gray-50
        accentBlue: '#2563EB',    // blue-600
      },
      borderRadius: {
        lg: '0.5rem',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};