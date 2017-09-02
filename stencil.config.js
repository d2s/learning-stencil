exports.config = {
  bundles: [
    { components: ['basic-site', 'site-header', 'home-page'] },
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
