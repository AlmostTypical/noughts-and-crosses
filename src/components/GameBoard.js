var React = require('react');
var data = require('./data');

var GameBoard = React.createClass({
  render: function () {
    return (
      <div>
        <table>
          <tr>
            <button>{this.props.data.boardData[0][0]}</button>
            <button>{this.props.data.boardData[0][1]}</button>
            <button>{this.props.data.boardData[0][2]}</button>
          </tr>
          <tr>
            <button>{this.props.data.boardData[1][0]}</button>
            <button>{this.props.data.boardData[1][1]}</button>
            <button>{this.props.data.boardData[1][2]}</button>
          </tr>
          <tr>
            <button>{this.props.data.boardData[2][0]}</button>
            <button>{this.props.data.boardData[2][1]}</button>
            <button>{this.props.data.boardData[2][2]}</button>
          </tr>
        </table>
      </div>
    )
  }
});

module.exports = GameBoard;