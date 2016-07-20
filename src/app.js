var React = require('react');
var ReactDOM = require('react-dom');

var GameBoard = require('./components/GameBoard');
var data = require('./data');
var _ = require('underscore');

var App = React.createClass({
  getInitialState: function () {
    return {
      boardData: [
        ' ', ' ', ' ',
        ' ', ' ', ' ',
        ' ', ' ', ' '
      ],
      pFlag: true,
      winner: ''
    }
  },
  getRow: function (e) {
    var rowOne = this.state.boardData.slice(0, 3);
    var rowTwo = this.state.boardData.slice(3, 6);
    var rowThree = this.state.boardData.slice(6);
    console.log('r1 '+rowOne);
    console.log('r2 '+rowTwo);
    console.log('r3 '+rowThree);
    if (Math.floor(e.target.id/3) === 0) {
      return rowOne;
    } else if (Math.floor(e.target.id/3) === 1) {
      return rowTwo;
    } else if (Math.floor(e.target.id/3) === 2) {
      return rowThree;
    }
  },
  getColumn: function (e) {
    var that = this;
    console.log(e.target.id);
    var colOne = this.state.boardData.filter(function(){
      return that.state.boardData[e.target.id] % 3 === 0});
    var colTwo =  this.state.boardData.filter(function(){
      return that.state.boardData[e.target.id] % 3 === 1});
    var colThree =  this.state.boardData.filter(function(){
      return that.state.boardData[e.target.id] % 3 === 2});
    console.log('c1 '+colOne);
    console.log('c2 '+colTwo);
    console.log('c3 '+colThree);
  },
  handleClick: function (e) {
    var that = this;
    var checkWin = function () {
      var row = that.getRow(e);
      var col = that.getColumn(e);
      if (col === ['X', 'X', 'X'] || row === ['X', 'X', 'X']) {
        that.setState({winner: 'X'})
      } else if (col === ['O', 'O', 'O'] || row === ['O', 'O', 'O']) {
        that.setState({winner: 'O'})
      }
      console.log(that.state.boardData.winner)
    };

    var newBoard = this.state.boardData.slice();
    var turn = this.state.pFlag;
    if (this.state.pFlag === true && newBoard[e.target.id] === ' ') {
      newBoard[e.target.id] = 'X';
      this.setState({pFlag: !turn})
    } else if (newBoard[e.target.id] === ' ') {
      newBoard[e.target.id] = 'O';
      this.setState({pFlag: !turn})
    }
    this.setState({
      boardData: newBoard,
    });
    checkWin(newBoard[e.target.id]);
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
