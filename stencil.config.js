exports.config = {
  bundles: [
    {
      components: [
        'blaze-app',
        'blaze-address',
        'blaze-address-heading',
        'blaze-alert'
      ]
    }
  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
