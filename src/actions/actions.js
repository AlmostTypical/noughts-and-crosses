import * as types from './types';

const actions = {};

actions.placeTile = function (tile) {
  return {
    type: types.PLACE_TILE,
    tile: tile
  }
};

actions.checkWin = function () {
  return {
    type: types.CHECK_WIN
  }
};

actions.determineRow = function () {
  return {
    type: types.DETERMINE_ROW
  }
};

actions.determineColumn = function () {
  return {
    type: types.DETERMINE_COLUMN
  }
};

actions.determineDiagonal = function () {
  return {
    type: types.DETERMINE_DIAGONAL
  }
};

export default actions;