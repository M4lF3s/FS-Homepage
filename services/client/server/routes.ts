const next_routes = require( 'next-routes' );

// Setup router.
module.exports = next_routes()
  .add( 'Home', '/' )
    .add( 'News', '/news')
    .add('Fachschaft', '/fachschaft')
  .add( 'PostsWithClassComponent' )
  .add( 'PostsWithFunctionComponent' )
  .add( 'single', '/posts/:slug' );