module.exports = {
  plugins: {
    // Use the new PostCSS integration package for Tailwind
    // This prevents the "using tailwindcss directly as a PostCSS plugin" error
    '@tailwindcss/postcss': {},
    autoprefixer: {}
  }
}
