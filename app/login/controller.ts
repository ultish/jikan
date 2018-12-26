import Controller from '@ember/controller';
import DS from 'ember-data';
import { service } from '@ember-decorators/service';
import { action } from '@ember-decorators/object';
import { storageFor } from 'ember-local-storage';

export default class Login extends Controller.extend({
  // storageFor must be on the prototype
  preferences: storageFor('preferences')
}) {
  @service store!: DS.Store;

  userName: String = '';

  @action
  async basicSubmitAction() {
    let user = await this.store.queryRecord('user', {
      filter: {
        name: this.userName
      }
    });
    if (!user) {
      // create new user
      user = this.store.createRecord('user', {
        name: this.userName
      });
      await user.save();
    }

    // store the user in preferences
    const prefs = this.preferences;
    prefs.set('user', user.name);

    this.transitionToRoute('tracker');
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    login: Login;
  }
}
