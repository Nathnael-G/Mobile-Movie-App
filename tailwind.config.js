/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#030014',
        secndary: '#151312',
        accent: '#ab8bff',
        light:{
          100: '#D6C6FF',
          200: '#A8B5DB',
          300: '#9C4AAB',
        },
        dark:{
          100: '#221f3D',
          200: '#0f0d23',
 },
        background: '#F5F5F5',
        textPrimary: '#333333',
        textSecondary: '#666666',
      },
    },
  },
  plugins: [],
}