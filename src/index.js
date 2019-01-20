import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import Header, { Header2 } from './components/Header.jsx';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    };
  }

  // using Props. props - reactJS docs
  renderHeader() {
    const text = 'This is the Text prop from index.js';
    return (
      <Fragment>
        <Header text={text} />
        <Header2 />
      </Fragment>
    );
  }

  //TODO: Render list of elements saved in state of the component. hint: es6 map
  renderList() {}

  render() {
    return (
      <Fragment>
        {this.renderHeader()}
        <p>Test P</p>
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
module.hot.accept();
