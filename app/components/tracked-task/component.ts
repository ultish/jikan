import Component from '@ember/component';
import { observes } from '@ember-decorators/object';
// import { tagName } from '@ember-decorators/component';

// @tagName('tr')
export default class TrackedTask extends Component {
  isMouseDown = false;

  @observes('isMouseDown')
  change() {
    console.log('isMouseDown', this.isMouseDown);
  }
}
