var React = require('react');
var ReactDOM = require('react-dom');

var GameBoard = require('./components/GameBoard');
var data = require('./data');

var App = React.createClass({
  getInitialState: function () {
    return {
      boardData: [
        ' ', ' ', ' ',
        ' ', ' ', ' ',
        ' ', ' ', ' '
      ],
      pFlag: true
    }
  },
  handleClick: function (id) {
    var newBoard = this.state.boardData.slice();
    var turn = this.state.pFlag;
    if (this.state.pFlag === true && newBoard[id] === ' ') {
      newBoard[id] = 'X';
      this.setState({pFlag: !turn})
    } else if (newBoard[id] === ' ') {
      newBoard[id] = 'O';
      this.setState({pFlag: !turn})
    }
    this.setState({
      boardData: newBoard,
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
