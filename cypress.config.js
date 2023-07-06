const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'nf83ow',
  e2e: {
    baseUrl: 'https://amap.amalitech-dev.net/login',
  },
})