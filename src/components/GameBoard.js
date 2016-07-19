var React = require('react');
var data = require('./../data');

var GameBoard = React.createClass({
  render: function () {
    return (
      <div>
        <table>
          <tr>
            <button>{this.props.tilesData[0][0]}</button>
            <button>{this.props.tilesData[0][1]}</button>
            <button>{this.props.tilesData[0][2]}</button>
          </tr>
          <tr>
            <button>{this.props.tilesData[1][0]}</button>
            <button>{this.props.tilesData[1][1]}</button>
            <button>{this.props.tilesData[1][2]}</button>
          </tr>
          <tr>
            <button>{this.props.tilesData[2][0]}</button>
            <button>{this.props.tilesData[2][1]}</button>
            <button>{this.props.tilesData[2][2]}</button>
          </tr>
        </table>
      </div>
    )
  }
});

module.exports = GameBoard;