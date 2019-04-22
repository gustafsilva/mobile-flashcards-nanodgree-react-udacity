import { AsyncStorage } from 'react-native';

export const DECKS_STORAGE_KEY = 'MobileFleshCard:decks';

/** Formata o dado de acordo como o AsyncStorage (banco de dados) possa entender. */
const formatDatabase = data => JSON.stringify(data);
/** Formata o dado para que o JavaScript (mobile) possa manipular os dados mais fácilmente. */
const formatMobile = data => JSON.parse(data);

/** Retorna todos os baralhos com seus títulos, perguntas, e respostas. */
export const getDecks = () => AsyncStorage.getItem(DECKS_STORAGE_KEY).then(formatMobile);

/** Dado um único argumento id, ele retorna o baralho associado àquele id. */
export const getDeck = id => getDecks().then(decks => decks[id]);

/** Dado um único argumento title, ele adiciona-o aos baralhos.  */
export const saveDeckTitle = title => AsyncStorage.mergeItem(DECKS_STORAGE_KEY, formatDatabase({
  [title]: {
    title,
    questions: [],
  }
}));

/** Dado dois argumentos, title e card, ele adiciona o cartão à lista de perguntas
 *  ao baralho com o título associado.
 * */
export function addCardToDeck(title, card) {
  const decks = getDecks();
  const deck = decks[card];
  const { questions } = deck;

  const newDecks = {
    ...decks,
    [card]: {
      ...deck,
      questions: [
        ...questions,
        title
      ]
    }
  };

  return AsyncStorage.setItem(DECKS_STORAGE_KEY, formatDatabase(newDecks));
}
