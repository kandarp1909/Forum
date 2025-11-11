module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#5B6CFF',
        'muted': '#6B7280'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(11,15,30,0.06)'
      },
      borderRadius: {
        'xl2': '20px'
      }
    }
  },
  plugins: []
}