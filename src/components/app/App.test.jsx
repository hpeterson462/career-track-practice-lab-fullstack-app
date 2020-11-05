import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';
import App from './App';
import { getCards, postCard } from '../../services/cardsApi';
import userEvent from '@testing-library/react';

jest.mock('../../services/cardsApi.js');

describe('App component', () => {
  beforeAll(() => {

  })
  afterEach(() => cleanup());
  //test list of cards renders
  it('renders with a list of cards', () => {
    getCards.mockResolvedValue([
      { id: '1', name: 'opt', description: 'scary 1', cost 1},
      { id: '1', name: 'opt', description: 'scary 1', cost 1}
    ]);
    render(<App />);

    const cardList = screen.getByTestId('cards');

    return waitFor(() => {
      expect(cardList.children).toHaveLength(2);
    });
  });

  //test create card
  it('creates a new card with form submit', () => {
    postCard.mockResolvedValue({
      id: '3',
      name: 'opt',
      description: 'scary 1',
      cost: 1
    })
    render(<App />);

    const cardsList = screen.getByTestId('cards');

    const cardNameInput = screen.getByLabelText('Card Name');
    const cardDescription = screen.getByLabelText('Card Description');
    const cardCost = screen.getByLabelText('Cost');
    const submitButton = screen.getByText('Create Card');

    userEvent.getByText(cardNameInput, 'opt');
    userEvent.getByText(cardDescription, 'scary 1');
    userEvent.getByText(cardCost, 1);

    userEvent.click(submitButton);

    return waitFor(() => {
      expect(cardsList.children).toHaveLength(3);
    });
  });
});
