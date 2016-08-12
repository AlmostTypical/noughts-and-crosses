import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducer/reducer';
import GameBoard from './components/GameBoard';

const store = createStore(reducer);

const App = React.createClass({
  render: function () {
    return (
      <div>
        <GameBoard />
      </div>
    )
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('App'));