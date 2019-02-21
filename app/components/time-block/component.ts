import Component from '@ember/component';
import { classNames, className, attribute } from '@ember-decorators/component';

// @tagName('td')
@classNames('block')
export default class TimeBlock extends Component {
  @attribute isMouseDown!: Boolean;
  @className('highlight') highlighted = false;

  mouseDown() {
    this.set('isMouseDown', true);
    this.toggleProperty('highlighted');
    return false;
  }

  mouseUp() {
    this.set('isMouseDown', false);
  }

  mouseEnter() {
    if (this.isMouseDown) {
      console.log('highlighting');
      this.toggleProperty('highlighted');
    }
  }
}
