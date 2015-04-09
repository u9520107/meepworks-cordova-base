import ActionBase from 'meepworks/action-base';

export default class TestAction extends ActionBase {
  *action(msg) {
    return msg;
  }
}
