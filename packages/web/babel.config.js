/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const config = require('@tt-v1/babel')

const customConfig = {
  ...config,
  presets: [...config.presets, ['@babel/preset-react', { runtime: 'automatic' }]],
  plugins: [['relay', { schema: '../server/graphql/schema.graphql' }]],
}

module.exports = customConfig
