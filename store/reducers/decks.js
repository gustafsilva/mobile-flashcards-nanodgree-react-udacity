/* eslint-disable no-case-declarations */
import {
  GET_DECKS,
  ADD_DECK,
  ADD_CARD_TO_DECK,
} from '../actions/decks';

export const INIT_STATE_DECKS_STATE = [];

const decks = (state = INIT_STATE_DECKS_STATE, action) => {
  switch (action.type) {
    case GET_DECKS:
      return action.decks;
    case ADD_DECK:
      return {
        ...state,
        [action.title]: {
          title: action.title,
          questions: []
        }
      };
    case ADD_CARD_TO_DECK:
      const deck = state[action.card];
      const { questions } = deck;

      return {
        ...state,
        [action.card]: {
          ...deck,
          questions: [
            ...questions,
            action.title
          ]
        }
      };
    default:
      return state;
  }
};

export default decks;
