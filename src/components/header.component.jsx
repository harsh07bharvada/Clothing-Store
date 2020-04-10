import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../assets/crown.svg';
import {ReactComponent as Cart} from '../assets/bag.svg';
import {auth} from '../firebase/firebase.util'

const Header = ({user})=>(
    <div className="flex flex-row h-20 w-full ">
        <div className="flex justify-start items-center h-full w-1/6">
            <Link className=" md:mx-20" to='/'>
                <span className="flex justify-start" >
                    <Logo className="h-12 w-full"/>
                </span>
            </Link>
        </div>
        
        <div className="text-gray-700 flex h-full w-5/6 justify-end items-center font-extrabold text-md md:text-lg">
            
            <div className="flex w-1/6 h-full items-center justify-end md:justify-center">
                <Link to='/shop'>
                    Shop
                </Link>
            </div>
            <div className="flex w-1/6 h-full items-center justify-end md:justify-center">
                <Link to='/'>
                    Contact
                </Link>
            </div>
            
            <div className="flex w-1/6 h-full items-center justify-end justify-center cursor-pointer">
                {
                    user? 
                    (
                        <div onClick={()=>auth.signOut()}>
                            Sign Out
                        </div>
                    )
                    :(
                    <Link to='/signin'>
                        Sign In
                    </Link>)
                }
            </div>
            <div className="flex w-1/6 h-full"/>
            <div className="text-black flex w-1/6 h-full justify-end items-center font-bold cursor-pointer">
                {
                    user?(<span>
                            {user.displayName}
                        </span> ) :""
                }
            </div>
            
            <div className="flex w-1/6 h-full justify-center items-center cursor-pointer">
                <Cart className="h-5 md:h-8 w-full" />
            </div>
            
            
        </div>
    </div>
);

export default Header;

