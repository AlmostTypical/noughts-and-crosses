import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducer/reducer';
import Gameboard from './components/GameBoard';

const store = createStore(reducer);

const app = React.createClass({
  render: function () {
    return (
      <div>
        <Gameboard />
      </div>
    )
  }
});

ReactDOM.render(
  <Provider store={store}>
    <app />
  </Provider>,
  document.getElementById('app'));