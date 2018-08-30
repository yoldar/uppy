module.exports = {
  presets: [
    ['@babel/preset-env', {
      modules: false,
      loose: true
    }]
  ],
  plugins: [
    '@babel/plugin-transform-object-assign',
    ['@babel/plugin-transform-react-jsx', { pragma: 'h' }]
  ]
}
