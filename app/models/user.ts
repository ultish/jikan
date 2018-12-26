import DS from 'ember-data';
const { Model } = DS;
import { attr } from '@ember-decorators/data';

export default class User extends Model {
  @attr('string')
  name!: string;

  @attr('string')
  rev!: string;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    user: User;
  }
}
