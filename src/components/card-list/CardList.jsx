import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCards } from '../../selectors/cardSelectors';
import { fetchCards, removeCard } from '../../actions/cardActions';

const CardList = () => {
  const cards = useSelector(selectCards);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCards())
  }, []);

  const handleDelete = ({ target }) => {
    dispatch(removeCard(target.value));
  };

  const cardElements = cards.map(card =>
    <>
      <li key={card.id}>
        <p>{card.name}</p>
      </li>
      <button value={card.id} onClick={handleDelete}>Delete</button>
    </>
  );

  return (
    <ul data-testid="cards">
      {cardElements}
    </ul>
  );
};

export default CardList;
