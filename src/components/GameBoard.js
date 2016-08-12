import React from 'react';
import {connect} from 'react-redux';
import actions from '../actions/actions'
import Tile from './Tile'


const GameBoard = React.createClass({
  render: function () {
    var tileNodes = this.props.boardData.map(function (tile, index) {
      return <Tile
        key={index}
        id={index}
        boardData={tile}
      />
    });
    return (
      <div className="gameBoard">
        {tileNodes}
      </div>
  )
  }
});


const mapStateToProps = function (state) {
  return {
    boardData: state.boardData
  }
};



export default connect(mapStateToProps)(GameBoard);