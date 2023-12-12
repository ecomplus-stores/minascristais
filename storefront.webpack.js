const path = require('path')

module.exports = () => ({
  resolve: {
    alias: {
      './html/PointsApplier.html': path.resolve(__dirname, 'template/js/custom-js/html/PointsApplier.html')
    }
  }
})