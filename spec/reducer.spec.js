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
          '', '', '',
          '', '', '',
          '', '', ''
        ],
        turnNumber: 0,
      };
      var myAction = actions.placeTile(2);
      var newState = reducer(initialState, myAction);
      var expected = {
        playerTurn: true,
        selectedTile: 2,
        boardData: [
          '', '', 'X',
          '', '', '',
          '', '', ''
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
          '', '', '',
          '', '', '',
          '', '', ''
        ],
        turnNumber: 0,
      };
      var myAction = actions.placeTile(4);
      var newState = reducer(initialState, myAction);
      var expected = {
        playerTurn: false,
        selectedTile: 4,
        boardData: [
          '', '', '',
          '', 'O', '',
          '', '', ''
        ],
        turnNumber: 1,
      };
      expect(newState).to.eql(expected)
    })
  });

});