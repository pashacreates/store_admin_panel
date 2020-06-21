import React from 'react';
import TableProducts from './components/TableProducts';
import AppHeader from './components/AppHeader';
import AddProductsForm from './components/AddProductsForm';

export default class App extends React.Component {
  render() {
    return(
      <main className='App'>
        <AppHeader />
        <AddProductsForm />
        <TableProducts />
      </main>
    );
  }
}