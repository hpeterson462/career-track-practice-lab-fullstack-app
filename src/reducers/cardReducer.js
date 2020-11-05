import { PREPEND_CARD } from '../actions/cardActions';

const initialState = {
  list: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case PREPEND_CARD:
      return { ...state, list: [action.payload, ...state.list] };
    case SET_CARDS:
      return { ...state, list: [action.payload, ...state.list] };
    case DELETE_CARD:
      return {
        ...state,
        list: state.list.filter(card => card.id !== action.payload)
      }
    default:
      return state;
  }
}
