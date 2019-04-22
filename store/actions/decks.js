import * as API from '../../utils/api';

export const GET_DECKS = 'GET_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_CARD_TO_DECK = 'ADD_CARD_TO_DECK';

const getDecks = decks => ({ type: GET_DECKS, decks });
const addDeck = title => ({ type: ADD_DECK, title });
const addCardToDeck = (title, card) => ({ type: ADD_CARD_TO_DECK, title, card });

export const handleGetDecks = () => dispatch => (
  API.getDecks().then(decks => dispatch(getDecks(decks)))
);

export const handleAddDeck = title => dispatch => (
  API.saveDeckTitle(title).then(dispatch(addDeck(title)))
);

export const handleAddCardToDeck = (title, card) => dispatch => (
  API.addCardToDeck(title, card).then(dispatch(addCardToDeck(title, card)))
);
