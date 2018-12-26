import DS from 'ember-data';
const { Model } = DS;
import { attr, hasMany } from '@ember-decorators/data';
import TrackedTask from 'jikan/models/trackedtask';

export default class Trackedday extends Model {
  @attr('string')
  rev!: string;

  // @attr('number')
  // date!: number;

  @hasMany('trackedtask')
  trackedTasks!: TrackedTask[];
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    trackedday: Trackedday;
  }
}
