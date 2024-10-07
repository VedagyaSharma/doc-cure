/**  @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  resolve: {
    alias: {
      '@shadcn_ui': '/node_modules/@shadcn_ui',
    }
  }
}
