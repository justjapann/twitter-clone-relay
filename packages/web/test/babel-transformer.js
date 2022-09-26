/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const { createTransformer } = require('babel-jest').default

const config = require('../babel.config')

module.exports = createTransformer(config)
