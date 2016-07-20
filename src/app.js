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
      pFlag: true
    }
  },
  handleClick: function (id) {
    var newBoard = this.state.boardData.slice();
    var turn = this.state.pFlag;
    if (this.state.pFlag === true) {
      newBoard[id] = 'X';
    } else {
      newBoard[id] = 'O';
    }
    console.log(this.state.boardData = newBoard);
    this.setState({
      boardData: newBoard,
      pFlag: !turn
    });
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
