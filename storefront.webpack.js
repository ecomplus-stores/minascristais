const path = require('path')

module.exports = () => ({
  resolve: {
    alias: {
      './html/PointsApplier.html': path.resolve(__dirname, 'template/js/custom-js/html/PointsApplier.html'),
      './js/PointsApplier.js': path.resolve(__dirname, 'template/js/custom-js/js/PointsApplier.js')
    }
  }
})