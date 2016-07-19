var React = require('react');
var ReactDOM = require('react-dom');

var GameBoard = require('./components/GameBoard');
var data = require('./data');

var App = React.createClass({
  getInitialState: function () {
    return {
      boardData: [
        '', '', '',
        '', '', '',
        '', '', ''
      ],
    }
  },
  handleClick: function (id) {
    console.log(id);
    var newBoard = this.state.boardData.slice();
    newBoard[id] = 'x';
    this.boardData = newBoard;
  },
  render: function () {
    return (
      <div>
        <h1>Noughts and Crosses</h1>
        <GameBoard
          tilesData={this.state.boardData}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
});

ReactDOM.render(<App/>, document.getElementById('app'));
