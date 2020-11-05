import React from 'react';
import store from '../../store';
import { Provider } from 'react-redux';
import CreateCard from '../create-card/CreateCard';
import CardList from '../card-list/CardList';

export default function App() {
  return (
    <Provider store={store}>
      <CreateCard />
      <CardList />
    </Provider>
  );
}
