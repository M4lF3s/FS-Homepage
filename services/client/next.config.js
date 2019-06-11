const withTypescript = require('next-with-typescript')
const withSass = require('@zeit/next-sass')
const withImages = require('next-images')
module.exports = withTypescript(withSass(withImages()))