import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function authorReducer(state = initialState.courses, action){
  switch(action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      // state.push(action.author);
      // return state;
      return action.authors;
    default:
      return state;
  }
}
