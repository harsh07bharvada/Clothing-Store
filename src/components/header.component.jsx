import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../assets/crown.svg';
import {auth} from '../firebase/firebase.util';
import {connect} from 'react-redux';
import CartIcon from './cart-icon.component';
import CartDropwdown from './cart-dropdown.component';
import {selectCartHidden} from '../redux/cart/cart.selectors';
import {currentUserSelector} from '../redux/user/user.selectors';
import {createStructuredSelector} from 'reselect';


const Header = ({currentUser,hidden})=>(
    <>
    <div className="flex inline-block flex-row h-20 w-full text-xs md:text-base bg-white uppercase font-semibold text-gray-800 tracking-wide justify-between items-center md:px-12">
        <div className="flex justify-start items-center h-full w-auto md:px-4">
            <Link to='/'>
              <Logo className="h-8 md:h-12 w-8 md:w-12 "/>
            </Link>
        </div>
        
        <div className="flex w-auto h-full">

            <div className="flex w-auto h-full items-center justify-center  ">
                <Link to='/shop'>
                    Shop
                </Link>
            </div>
            <div className="flex w-auto h-full items-center justify-center md:px-4 ">
                <Link to='/'>
                    Contact
                </Link>
            </div>
            
            
            <div className=" flex w-auto h-full justify-center items-center  md:px-4 cursor-pointer ">
                {
                    currentUser?(<span className="font-bold text-black"> {currentUser.displayName} </span> ) :""
                }
            </div>
            
            <div className="flex w-auto h-full justify-center items-center md:px-4 cursor-pointer ">
                <CartIcon /> 
                {hidden ?null :<CartDropwdown/>}
            </div>
            <div className="flex w-auto h-full items-center justify-center md:px-4 cursor-pointer ">
                    {
                    currentUser?
                     ( <div className="bg-gray-800 hover:bg-white border-2 border-gray-900 text-white hover:text-gray-900 rounded px-3 py-2" onClick={()=>auth.signOut()}> Logout </div>)
                    :( <Link to='/signin'> Sign In </Link>)
                    }
            </div>
        </div>
        
    </div>
    
    </>
);

const mapStateToProps =  createStructuredSelector({
    currentUser : currentUserSelector,
    hidden :selectCartHidden
})

export default connect(mapStateToProps)(Header);

