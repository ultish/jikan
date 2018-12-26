import Controller from '@ember/controller';
import { action } from '@ember-decorators/object';

export default class Tracker extends Controller {
  // @service router!: any;
  // @service store!: DS.Store;

  preferences: any;
  leftSideBarLockedOpen: Boolean = false;
  // db!: any;
  loading: boolean = false;

  // constructor() {
  //   super(...arguments);
  //   this.db = db;
  //   this.preferences = storageFor('preferences');
  //   debugger;
  // }

  @action
  navigate(location: string) {
    this.transitionToRoute(location);
  }

  @action
  transitionTo(date: number) {
    this.transitionToRoute('tracker.details', date);
  }

  @action
  toggle() {
    this.toggleProperty('leftSideBarLockedOpen');
  }

  @action
  newDay() {
    const newDay = this.store.createRecord('trackedday', {
      date: new Date().getTime(),
      trackedTasks: []
    });
    newDay.save();
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    tracker: Tracker;
  }
}
