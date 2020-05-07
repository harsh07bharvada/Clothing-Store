import React from 'react';
import './App.css';
import './assets/main.css';
import HomePage from './pages/homepage.page';
import ShopPage from './pages/shop.page'
import {Route,Switch, Redirect} from 'react-router-dom';
import Header from './components/header.component';
import SignInSignUp from './pages/signin-signup-page';
import CheckoutPage from './pages/checkout.page.jsx';
import {auth,createUserProfileData} from '../src/firebase/firebase.util'
import {connect} from 'react-redux';
import setCurrentUser from './redux/user/user.action';
import {currentUserSelector} from '../src/redux/user/user.selectors';



class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount=()=>{

    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async (user)=>{
      
      if(user)
      {
        const userRef = createUserProfileData(user);
        (await userRef).onSnapshot(snapshot=>{

          setCurrentUser({
            
              id:userRef.id,
              ...snapshot.data()
            
          });
        });
      }
      else{
        setCurrentUser(user);
      }
    });
  }

  componentWillUnmount=()=>{
    this.unsubscribeFromAuth();
  }

  render(){


    const {currentUser} = this.props;
    return (
      <>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' render = { () => currentUser ? <Redirect to="/" /> :<SignInSignUp/>  } />
          <Route exact path='/checkout' component={CheckoutPage} />
        </Switch>
      </>
    );
  };
}

const mapStateToProps = state =>({
  currentUser:currentUserSelector(state)
})

const mapDispatchToProps = dispatch =>({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
