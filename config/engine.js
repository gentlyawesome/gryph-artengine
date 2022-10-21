const path = require('path')
// const root = path.join(process.cwd(), 'artengine')
const root = path.join(process.cwd())

module.exports = {
  default_weight: 100,
  default_blend: 'source-over',
  default_opacity: 1,
  preview: {
    width: 300,
    height: 300
  },
  image: {
    width: 2000,
    height: 2000
  },
  pixelated: 1 / 27,
  start_edition: 1,
  cid_version: 0,
  smoothing: true,
  shuffle_layers: true,
  add_preview: false,
  paths: {
    root,
    config: path.resolve(root, 'config'),
    build: path.resolve(root, 'build'),
    layers: path.resolve(root, 'layers'),
    cache: path.resolve(root, '.artengine')
  },
  metadata_template: {
    name: 'Gryph #{EDITION}',
    description: '#{EDITION} of 5,555 Gryph. CC0 PFPs that share the wealth.',
    image: 'https://ipfs.io/ipfs/{HIRES_CID}',
    external_url: 'https://www.wearecashcows.com/gallery?edition={EDITION}'
  },
  layers: [
    {
      config: "layers/all",
      series: "Gryph",
      limit: 10 
    },
  ],
  _layers: [
    //used to test a single or many layers. just paste the one/s 
    //you want to test below here, then rename _layers to layers.
  ]
}
