import * as types from '../actions/types';
import actions from '../actions/actions';

let originalState = {
  playerTurn: true,
  boardData: [
    '-', '-', '-',
    '-', '-', '-',
    '-', '-', '-'
  ],
  turnNumber: 0,
  selectedTile: 0,
  selectedRow: [],
  selectedCol: [],
  selectedDiag: [],
  winner: '-'

};

const reducer = function (initialState, action) {
  initialState = initialState || originalState;
  let newState;
  switch(action.type) {
    case types.PLACE_TILE:
      if (initialState.winner === '-' && initialState.boardData[action.tile] === '-') {
      console.log(initialState.winner);
        let newBoardData = initialState.boardData.slice();
        newBoardData[action.tile] = (initialState.playerTurn === true) ? 'X' : 'O';
        newState = Object.assign({}, initialState, {
          selectedTile: action.tile,
          boardData: newBoardData,
          turnNumber: initialState.turnNumber + 1,
          playerTurn: !initialState.playerTurn
        });
      } else {
        newState = initialState
      }
      break;
    case types.DETERMINE_ROW:
      let selectedTileRow = initialState.selectedTile;
      let rowOne = initialState.boardData.slice(0, 3);
      let rowTwo = initialState.boardData.slice(3, 6);
      let rowThree = initialState.boardData.slice(6);
      let chosenRow;
      if (Math.floor(selectedTileRow / 3) === 0) {
        chosenRow = rowOne;
      } else if (Math.floor(selectedTileRow / 3) === 1) {
        chosenRow = rowTwo;
      } else if (Math.floor(selectedTileRow / 3) === 2) {
        chosenRow = rowThree
      }
      newState = Object.assign({}, initialState, {
        selectedRow: chosenRow
      });
      break;
    case types.DETERMINE_COLUMN:
      let selectedTileCol = initialState.selectedTile;
      let colOne = initialState.boardData.filter(function (tile, index) {
        return index % 3 === 0;
      });
      let colTwo = initialState.boardData.filter(function (tile, index) {
        return index % 3 === 1;
      });
      let colThree = initialState.boardData.filter(function (tile, index) {
        return index % 3 === 2;
      });
      let chosenCol;
      if (Math.floor(selectedTileCol % 3) === 0) {
        chosenCol = colOne;
      } else if (Math.floor(selectedTileCol % 3) === 1) {
        chosenCol = colTwo;
      } else if (Math.floor(selectedTileCol % 3) === 2) {
        chosenCol = colThree
      }
      newState = Object.assign({}, initialState, {
        selectedCol: chosenCol
      });
      break;
    case types.DETERMINE_DIAGONAL:
      let selectedTileDiag = initialState.selectedTile;
      let boardData = initialState.boardData.slice();
      let num = 3;
      let diagOne = [];
      let diagTwo = [];
      let indTotalA = 0;
      let indTotalB = num - 1;
      for (var j = 0; j < num; j++) {
        diagOne.push(boardData[indTotalA]);
        indTotalA += (num + 1);
        diagTwo.push(boardData[indTotalB]);
        indTotalB += (num - 1);
      }
      let chosenDiag;
      if (selectedTileDiag % 4 === 0) {
        chosenDiag = diagOne;
      } else if (selectedTileDiag >= 2 && selectedTileDiag <= 6 && selectedTileDiag % 2 === 0) {
        chosenDiag = diagTwo;
      } else {
        chosenDiag = ['-', '-', '-']
      }
      newState = Object.assign({}, initialState, {
        selectedDiag: chosenDiag
      });
      break;
    case types.CHECK_WIN:
      let winner = '-';
      const checkO = function (tile) {
        return tile === 'O'
      };
      const checkX = function (tile) {
        return tile === 'X'
      };
      let selectedRow = initialState.selectedRow.slice();
      let selectedCol = initialState.selectedCol.slice();
      let selectedDiag = initialState.selectedDiag.slice();
      console.log(selectedRow.every(checkX));
      console.log(selectedCol.every(checkX));
      console.log(selectedDiag.every(checkX));
      if (selectedRow.every(checkX) || selectedCol.every(checkX) ||
        selectedDiag.every(checkX)) {
        winner = 'X'
      } else if (selectedRow.every(checkO) || selectedCol.every(checkO) ||
        selectedDiag.every(checkO)) {
        winner = 'O'
      } else {
        winner = '-'
      }
      newState = Object.assign({}, initialState, {
        winner: winner,
      });
      break;
    default:
      newState = initialState;
  }
  return newState;
};


export default reducer;