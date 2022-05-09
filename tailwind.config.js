module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        solid: '0px 2px 0px 0px rgb(0 0 0)',
        'solid-sm': '0px 1px 0px 0px rgb(0 0 0)',
      },
      colors: {
        cello: '#34495e',
        'dark-cyan': '#2c3e50',
        primary: '#3397db',
        'primary-hover': '#44a0de',
        secondary: '#627a8b',
        'secondary-hover': '#6a8496',
        'secondary-dark': '#3f515d',
        'primary-dark': '#297fb9',
        madison: '#2b3d4f',
        submarine: '#95a5a6',
        'gray-med': '#999999',
      },
      fontFamily: {
        'MerriweatherSans-ExtraBold': ['MerriweatherSans-ExtraBold', 'ui-sans-serif', 'system-ui'],
        'MerriweatherSans-Regular': ['MerriweatherSans-Regular', 'ui-sans-serif', 'system-ui'],
        'Merriweather-Regular': ['Merriweather-Regular', 'ui-sans-serif', 'system-ui'],
        'Merriweather-Bold': ['Merriweather-Bold', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};
