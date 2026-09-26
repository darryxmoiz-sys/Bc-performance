module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: { extend: {
    colors: { brand: '#e2231a', hot: '#ff5147', ink: '#0b0b0d', panel: '#171719', paper: '#f4f2ef' },
    fontFamily: { display: ['var(--font-display)', 'system-ui', 'sans-serif'], body: ['var(--font-body)', 'system-ui', 'sans-serif'] },
  } },
  plugins: [],
};
