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

    const paperTheme = this.paperTheme;
    console.log(PALETTES);
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

    debugger;
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

  @action
  async deleteAllDays() {
    const days = await this.store.findAll('trackedday');
    const promises = days.map(day => day.destroyRecord());
    await Promise.all(promises);
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    application: Application;
  }
}

/*

      background: {
        50: "rgb(232, 245, 233)"
        100: "rgb(200, 230, 201)"
        200: "rgb(165, 214, 167)"
        300: "rgb(129, 199, 132)"
        400: "rgb(102, 187, 106)"
        500: "rgb(76, 175, 80)"
        600: "rgb(67, 160, 71)"
        700: "rgb(56, 142, 60)"
        800: "rgb(46, 125, 50)"
        900: "rgb(27, 94, 32)"
        A100: "rgb(185, 246, 202)"
        A200: "rgb(105, 240, 174)"
        A400: "rgb(0, 230, 118)"
        A700: "rgb(0, 200, 83)"
        contrastDefaultColor: "rgba(0, 0, 0, 0.87)"
        contrastLightColors: (5) ["500", "600", "700", "800", "900"]
        contrastStrongLightColors: (3) ["500", "600", "700"]
      }*/
