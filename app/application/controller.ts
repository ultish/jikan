import Controller from '@ember/controller';
import DS from 'ember-data';
import { service } from '@ember-decorators/service';
import { action } from '@ember-decorators/object';
import { storageFor } from 'ember-local-storage';
import PALETTES from 'ember-paper/utils/palettes';

import PouchDB from 'pouchdb';
let db = new PouchDB('local_pouch_jikan');

export default class Application extends Controller {
  @service router!: any;
  @service store!: DS.Store;
  @service paperTheme!: any;

  preferences: any;
  leftSideBarLockedOpen: Boolean = true;
  db!: any;
  loading: boolean = false;

  constructor() {
    super(...arguments);
    this.db = db;
    this.preferences = storageFor('preferences');

    /*
    ember-paper/addon/utils/palettes.js contains all the palettes
    https://github.com/miguelcobain/ember-paper/blob/master/addon/utils/generate-palette.js generate the palettes
    https://github.com/miguelcobain/ember-paper/blob/master/addon/services/paper-theme.js install the themes
      this by default uses the 'grey' profile as the background attributes. Hence you have all white/greys for bg

      // demo code from ember-paper
      https://github.com/miguelcobain/ember-paper/blob/14e3f0ffcaff3c4cfb9b93ff44f989da2a9a64dd/tests/dummy/app/controllers/theme.js

      var pal = this.PALETTES;
      var pt = paperTheme;
    
      pt.installTheme('default', {
        primary: pal.default.pink,
        accent: pal.default.red,
        warn: pal.default.green,
        background: pal.default.green // <--- special sauce to make bg diff color to the defaul 'grey'
      });


    */
  }

  @action
  darkTheme() {
    const paperTheme = this.paperTheme;
    const colour = PALETTES['blue-grey'];
    paperTheme.installTheme('default', {
      primary: colour,
      accent: colour,
      warn: colour,
      background: colour
    });
  }

  @action
  lightTheme() {
    const paperTheme = this.paperTheme;
    const colour = PALETTES['pink'];
    paperTheme.installTheme('default', {
      primary: colour,
      accent: colour,
      warn: colour,
      background: colour
    });
  }

  @action
  navigate(location: string) {
    this.transitionToRoute(location);
  }
  @action
  toggle() {
    this.toggleProperty('leftSideBarLockedOpen');
  }

  // This breaks the ember build...you'll get stuck in compile forever
  // @action
  // async deleteAllDays() {
  //   const days = await this.store.findAll('trackedday');
  //   const promises = days.map(day => day.destroyRecord());
  //   await Promise.all(promises);
  // }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    application: Application;
  }
}
