import Route from '@ember/routing/route';
import { storageFor } from 'ember-local-storage';
import { isBlank } from '@ember/utils';

export default class Application extends Route.extend({
  // anything which *must* be merged to prototype here
  preferences: storageFor('preferences')
}) {
  beforeModel(this: Application) {
    const user = this.preferences.get('user');
    if (isBlank(user)) {
      this.transitionTo('login');
    } else {
      this.transitionTo('tracker');
    }
  }
}
