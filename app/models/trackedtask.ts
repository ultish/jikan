import DS from 'ember-data';
const { Model } = DS;
import { attr, belongsTo } from '@ember-decorators/data';
import Task from './task';
import Trackedday from './trackedday';

export default class Trackedtask extends Model {
  @attr('string')
  rev!: string;

  @attr()
  blocks!: Number[];

  @belongsTo('task')
  task!: Task;

  // @belongsTo('trackedday')
  // trackedDay!: Trackedday;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    trackedtask: Trackedtask;
  }
}
