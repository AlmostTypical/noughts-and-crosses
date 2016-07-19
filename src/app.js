var React = require('react');
var ReactDOM = require('react-dom');

var GameBoard = require('./components/GameBoard');
var data = require('./components/data');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Noughts and Crosses</h1>
        <GameBoard data={this.props.data} />
      </div>
    );
  }
});

ReactDOM.render(<App data={data}/>, document.getElementById('app'));
