import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('tracker', function() {
    this.route('details', { path: ':date' });
  });
  this.route('login');
});

export default Router;
