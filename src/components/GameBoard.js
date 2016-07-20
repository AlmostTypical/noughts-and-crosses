var React = require('react');
var data = require('./../data');

var GameBoard = React.createClass({
  render: function () {
    return (
      <div>
        <table>
          <tr>
            <button onClick={this.props.handleClick.bind(null, 0)} className="tile" id="0">{this.props.tilesData[0]}</button>
            <button onClick={this.props.handleClick.bind(null, 1)} className="tile" id="1">{this.props.tilesData[1]}</button>
            <button onClick={this.props.handleClick.bind(null, 2)} className="tile" id="2">{this.props.tilesData[2]}</button>
          </tr>
          <tr>
            <button onClick={this.props.handleClick.bind(null, 3)} className="tile" id="3">{this.props.tilesData[3]}</button>
            <button onClick={this.props.handleClick.bind(null, 4)} className="tile" id="4">{this.props.tilesData[4]}</button>
            <button onClick={this.props.handleClick.bind(null, 5)} className="tile" id="5">{this.props.tilesData[5]}</button>
          </tr>
          <tr>
            <button onClick={this.props.handleClick.bind(null, 6)} className="tile" id="6">{this.props.tilesData[6]}</button>
            <button onClick={this.props.handleClick.bind(null, 7)} className="tile" id="7">{this.props.tilesData[7]}</button>
            <button onClick={this.props.handleClick.bind(null, 8)} className="tile" id="8">{this.props.tilesData[8]}</button>
          </tr>
        </table>
      </div>
    )
  }
});

module.exports = GameBoard;