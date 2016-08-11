import chai from 'chai';
import {expect} from 'chai';
import actions from '../src/actions/actions';
import * as types from '../src/actions/types';
import reducer from '../src/reducer/reducer';

describe('actions.reducer', function () {
  it('exists', function () {
    expect(reducer).to.be.a('function')
  });
  it('takes two arguments', function () {
    expect(reducer.length).to.equal(2)
  });
  describe('PLACE_TILE', function () {
    it('handles the action correctly for player X', function () {
      var initialState = {
        playerTurn: true,
        selectedTile: 0,
        boardData: [
          '-', '-', '-',
          '-', '-', '-',
          '-', '-', '-'
        ],
        turnNumber: 0,
      };
      var myAction = actions.placeTile(2);
      var newState = reducer(initialState, myAction);
      var expected = {
        playerTurn: true,
        selectedTile: 2,
        boardData: [
          '-', '-', 'X',
          '-', '-', '-',
          '-', '-', '-'
        ],
        turnNumber: 1,
      };
      expect(newState).to.eql(expected)
    });
    it('handles the action correctly for player O', function () {
      var initialState = {
        playerTurn: false,
        selectedTile: 0,
        boardData: [
          '-', '-', '-',
          '-', '-', '-',
          '-', '-', '-'
        ],
        turnNumber: 0,
      };
      var myAction = actions.placeTile(4);
      var newState = reducer(initialState, myAction);
      var expected = {
        playerTurn: false,
        selectedTile: 4,
        boardData: [
          '-', '-', '-',
          '-', 'O', '-',
          '-', '-', '-'
        ],
        turnNumber: 1,
      };
      expect(newState).to.eql(expected)
    })
  });
  describe('DETERMINE_ROW', function () {
    it('handles the action correctly', function () {
      var initialState = {
        selectedTile: 4,
        boardData: [
          '-', '-', '-',
          'X', 'X', '-',
          '-', '-', '-'
        ],
        selectedRow: []
      };
      var myAction = actions.determineRow();
      var newState = reducer(initialState, myAction);
      var expected = {
        selectedTile: 4,
        boardData: [
          '-', '-', '-',
          'X', 'X', '-',
          '-', '-', '-'
        ],
        selectedRow: ['X', 'X', '-']
      };
      expect(newState).to.eql(expected)
    });
  });
  describe('DETERMINE_COLUMN', function () {
    it('handles the action correctly', function () {
      var initialState = {
        selectedTile: 4,
        boardData: [
          '-', 'O', '-',
          'X', 'X', '-',
          '-', '-', '-'
        ],
        selectedCol: []
      };
      var myAction = actions.determineColumn();
      var newState = reducer(initialState, myAction);
      var expected = {
        selectedTile: 4,
        boardData: [
          '-', 'O', '-',
          'X', 'X', '-',
          '-', '-', '-'
        ],
        selectedCol: ['O', 'X', '-']
      };
      expect(newState).to.eql(expected)
    });
  });
  describe('DETERMINE_DIAGONAL', function () {
    it('handles the action correctly', function () {
      var initialState = {
        selectedTile: 2,
        boardData: [
          '-', '-', 'X',
          'X', 'X', '-',
          'O', '-', '-'
        ],
        selectedDiag: []
      };
      var myAction = actions.determineDiagonal();
      var newState = reducer(initialState, myAction);
      var expected = {
        selectedTile: 2,
        boardData: [
          '-', '-', 'X',
          'X', 'X', '-',
          'O', '-', '-'
        ],
        selectedDiag: ['X', 'X', 'O']
      };
      expect(newState).to.eql(expected)
    });
    it('handles the action correctly when no diag is present', function () {
      var initialState = {
        selectedTile: 1,
        boardData: [
          '-', '-', 'X',
          'X', 'X', '-',
          'O', '-', '-'
        ],
        selectedDiag: []
      };
      var myAction = actions.determineDiagonal();
      var newState = reducer(initialState, myAction);
      var expected = {
        selectedTile: 1,
        boardData: [
          '-', '-', 'X',
          'X', 'X', '-',
          'O', '-', '-'
        ],
        selectedDiag: []
      };
      expect(newState).to.eql(expected)
    });
  });
  describe('CHECK_WIN', function () {
    it('handles the action correctly', function () {
      var initialState = {
        playerTurn: false,
        selectedRow: ['O', 'O', 'O'],
        selectedCol: ['X', '-', '-'],
        selectedDiag: ['-','-','-'],
        winner: ''
      };
      var myAction = actions.checkWin();
      var newState = reducer(initialState, myAction);
      var expected = {
        playerTurn: true,
        selectedRow: ['O', 'O', 'O'],
        selectedCol: ['X', '-', '-'],
        selectedDiag: ['-', '-', '-'],
        winner: 'O'
      };
      expect(newState).to.eql(expected)
    });
  });
});