exports.config = {
  bundles: [
    { components: ['basic-site', 'site-header', 'home-page', 'basic-event'] },
    { components: ['basic-card']},
    { components: ['about-page']},
    { components: ['my-name', 'other-sites']}
  ],
  collections: [
    { name: '@stencil/router' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
