import React from 'react';
import './App.css';
import './assets/main.css';
import HomePage from './pages/homepage.page';
import ShopPage from './pages/shop.page'
import {Route} from 'react-router-dom';


class App extends React.Component {

  render(){
    return (
      <>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={ShopPage} />
      </>
    );
  };
}

export default App;
