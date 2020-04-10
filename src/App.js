import React from 'react';
import './App.css';
import './assets/main.css';
import HomePage from './pages/homepage.page';
import ShopPage from './pages/shop.page'
import {Route,Switch} from 'react-router-dom';
import Header from './components/header.component';
import SignInSignUp from './pages/signin-signup-page';
import {auth,createUserProfileData} from '../src/firebase/firebase.util'


class App extends React.Component {

  constructor()
  {
    super();
    this.state={
      currentUser :null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount=()=>{

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async (user)=>{
      
      if(user)
      {
        const userRef = createUserProfileData(user);

        (await userRef).onSnapshot(snapshot=>{
          this.setState({
            currentUser: {
              id:userRef.id,
              ...snapshot.data()
            }
          });
        });
      }
      else{
        this.setState({
          currentUser:user
        })
      }
    });
  }

  componentWillUnmount=()=>{
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <>
        <Header user={this.state.currentUser}/>
        <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInSignUp} />
        </Switch>
      </>
    );
  };
}

export default App;
