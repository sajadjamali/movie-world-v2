// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// }

module.exports = {
  plugins: [
    require('cssnano')({
      preset: 'default',
    }),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};

