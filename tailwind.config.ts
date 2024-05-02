import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layout/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      transitionProperty: {
        'width': 'width'
      },
      borderWidth: {
        '0.5': '0.5px',
      },
      colors: {
        'gray-20': 'hsla(0, 0%, 100%, .1)',
      },
    }
  },
  plugins: [],
}
export default config
