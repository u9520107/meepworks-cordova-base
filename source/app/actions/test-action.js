import ActionBase from 'meepworks/action-base';

const TEST_ACTION = Symbol();

export default class TestAction extends ActionBase {
  static get symbol() {
    return TEST_ACTION;
  }
  get symbol() {
    return TEST_ACTION;
  }
  *action(msg) {
    return msg;
  }
}
