import React from 'react';
import './App.css';
import './assets/main.css';
import HomePage from './pages/homepage.page';
import ShopPage from './pages/shop.page'
import {Route,Switch} from 'react-router-dom';
import Header from './components/header.component'



class App extends React.Component {

  render(){
    return (
      <>
        <Header/>
        <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        </Switch>
      </>
    );
  };
}

export default App;
