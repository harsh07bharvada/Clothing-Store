import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../assets/crown.svg';
import {auth} from '../firebase/firebase.util';
import {connect} from 'react-redux';
import CartIcon from './cart-icon.component';
import CartDropwdown from './cart-dropdown.component';
import {selectCartHidden} from '../redux/cart/cart.selectors';
import {currentUserSelector} from '../redux/user/user.selectors';
import {createStructuredSelector} from 'reselect'


const Header = ({currentUser,hidden})=>(
    <>
    <div className="flex inline-block flex-row h-20 w-full text-xs md: text-lg bg-white">
        <div className="flex justify-start items-center h-full w-1/6">
            <Link className=" md:mx-20" to='/'>
                <span className="flex justify-start" >
                    <Logo className="h-12 w-full"/>
                </span>
            </Link>
        </div>
        
        <div className="flex w-1/6 h-full items-center justify-end md:justify-center">
            <Link to='/shop'>
                SHOP
            </Link>
        </div>
        <div className="flex w-1/6 h-full items-center justify-end md:justify-start">
            <Link to='/'>
                CONTACT
            </Link>
        </div>
        
        <div className="flex w-1/6 h-full items-center justify-end  cursor-pointer">
            {
                
                currentUser? 
                (
                    <div onClick={()=>auth.signOut()}>
                        SIGN OUT
                    </div>
                )
                :(
                <Link to='/signin'>
                        SIGN IN
                </Link>)
            }
        </div>
        <div className="flex w-1/6 h-full"/>
        <div className="text-black flex w-1/6 h-full justify-end items-center font-bold cursor-pointer">
            {
                currentUser?(<span>
                        {currentUser.displayName}
                    </span> ) :""
            }
        </div>
        
        <div className="flex w-1/6 h-full justify-center items-center cursor-pointer">
            <CartIcon />
            {hidden ?null :<CartDropwdown/>}
            
            
        </div>
        
            
        
       
    </div>
    
    </>
);

const mapStateToProps =  createStructuredSelector({
    currentUser : currentUserSelector,
    hidden :selectCartHidden
})

export default connect(mapStateToProps)(Header);

