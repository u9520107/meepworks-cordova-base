import StoreBase from 'meepworks/store-base';
import TestAction from '../actions/test-action';

export default class ApplicationStore extends StoreBase {
  constructor() {
    this.msg = 'Hello Meepworks!';
  }
  handleTestAction(msg) {
    this.msg = msg;
    this.emit('change');
  }
  get handlers() {
    return [{
      action: TestAction.symbol,
      handler: this.handleTestAction
    }];
  }
}
