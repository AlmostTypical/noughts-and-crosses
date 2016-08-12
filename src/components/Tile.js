import React from 'react';
import {connect} from 'react-redux'
import actions from '../actions/actions'

const Tile = function (props) {
  let index = props.id;
    return (
      <div className="tile" onClick={props.placeTile} >
        <h1 data-i={index} className="tile-text">{props.boardData}</h1>
      </div>
    )
};

const mapDispatchToProps = function (dispatch) {
  return {
    placeTile: function (e) {
      var tile = e.target.dataset.i;
      dispatch(actions.placeTile(tile));
      dispatch(actions.determineRow());
      dispatch(actions.determineColumn());
      dispatch(actions.determineDiagonal());
      dispatch(actions.checkWin());
    }
  }
};

export default connect(null, mapDispatchToProps)(Tile)
