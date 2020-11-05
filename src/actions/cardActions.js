import { deleteCard, getCards, postCard } from '../services/cardsApi';

export const PREPEND_CARD = 'PREPEND_CARD';
export const prependCard = card => ({
  tye: PREPEND_CARD,
  payload: card
});

export const SET_CARDS = 'SET_CARDS';
export const setCards = cards => ({
  type: SET_CARDS,
  payload: cards
});

export const DELETE_CARD = 'DELETE_CARD';

export const createCard = card => dispatch => {
  postCard(card)
    .then(createdCard => {
      dispatch(prependCard(createdCard));
    });
};

export const fetchCards = () => dispatch => {
  getCards()
    .then(cards => {
      dispatch(setCards(cards))
    })
};

export const removeCard = id => dispatch => {
  deleteCard(id)
    .then(card => {
      dispatch({
        type: DELETE_CARD,
        payload: card.id
      });
    });
};
