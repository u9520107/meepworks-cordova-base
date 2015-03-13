import React from 'react';
import FileDriver from 'meepworks/file-driver';
import ApplicationStore from './stores/application-store';
import TestAction from './actions/test-action';

class Container extends React.Component {
  constructor() {
    super();
    this.handleChange = () => {
      this.forceUpdate();
    };
  }
  componentDidMount() {
    ApplicationStore.getInstance().on('change', this.handleChange);
    setTimeout(() => {
      new TestAction('Hello Cordova!').exec();
    }, 2000);
  }
  componentWillUnmount() {
    ApplicationStore.getInstance().off('change', this.handleChange);
  }
  render() {
    return <div>{ApplicationStore.getInstance().msg}</div>;
  }
}

const App = {
  component: Container,
  stores: [
    ApplicationStore
  ]
};

window.onload = () => {
  new FileDriver(App);
};
