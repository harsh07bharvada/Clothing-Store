import React from 'react';
import './App.css';
import './assets/main.css';
import HomePage from './pages/homepage.page';
import ShopPage from './pages/shop.page'
import {Route,Switch} from 'react-router-dom';
import Header from './components/header.component';
import SignInSignUp from './pages/signin-signup-page';
import {auth,createUserProfileData} from '../src/firebase/firebase.util'
import {connect} from 'react-redux';
import setCurrentUser from './redux/user/user.action'


class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount=()=>{

    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async (user)=>{
      
      if(user)
      {
        console.log(`ComponentDidMount called with user`);
        console.log(user);
        const userRef = createUserProfileData(user);

        (await userRef).onSnapshot(snapshot=>{

          console.log(`userRef :`);
          console.log(snapshot);
          console.log(snapshot.data());
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
    return (
      <>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInSignUp} />
        </Switch>
      </>
    );
  };
}
const mapDispatchToProps = dispatch =>({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})
export default connect(null,mapDispatchToProps)(App);
