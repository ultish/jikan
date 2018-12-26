import DS from 'ember-data';
const { Model } = DS;
import Costcode from './costcode';
import { attr, hasMany } from '@ember-decorators/data';

export default class Task extends Model {
  @attr('string')
  rev!: string;

  @attr('string')
  name!: string;

  @hasMany('costcode')
  costCodes!: Costcode[];
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    task: Task;
  }
}
