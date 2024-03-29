import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('blogs', function() {
    this.route('blog', { path: '/:blog_id' });
  });
  this.route('game');
  this.route('error-page', {path: '*path' });
});

export default Router;
