import Route from '@ember/routing/route';
import { storageFor } from 'ember-local-storage';

export default class Tracker extends Route.extend({
  // anything which *must* be merged to prototype here
  preferences: storageFor('preferences')
}) {
  async beforeModel(this: Tracker) {
    // this.store.queryRecord('user')
    const users = await this.store.findAll('user');

    console.log('users', users);

    // const user = this.preferences.get('user');
    // if (isBlank(user)) {
    //   this.transitionTo('login');
    // } else {
    //   this.transitionTo('tracker');
    // }
  }

  async model(this: Tracker) {
    return await this.store.findAll('trackedday');
  }
}
