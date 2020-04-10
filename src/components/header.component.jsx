import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../assets/crown.svg';
import {auth} from '../firebase/firebase.util'

const Header = ({user})=>(
    <div className="flex flex-row h-20 w-full ">
        <Link className="flex justify-start items-center h-full w-1/5 md:mx-20" to='/'>
            <span className="flex justify-start" >
                <Logo className="h-12 w-full"/>
            </span>
        </Link>
        <div className="flex h-full w-4/5  justify-end items-center font-bold text-md md:text-xl">
            <div className="flex w-1/5 h-full"/>
            <div className="flex w-2/5 h-full items-center justify-end md:justify-center">
                {
                    user? 
                    (<>
                        <div className="flex w-1/2 h-full items-center justify-end">
                            {user.displayName}
                        </div>
                        <div className="flex w-1/2 h-full items-center justify-end" onClick={()=>auth.signOut()}>
                            Sign Out
                        </div>
                    </>)
                    :(
                    <Link to='/signin'>
                        Sign In
                    </Link>)
                }
            </div>
            <div className="flex w-1/5 h-full items-center justify-end md:justify-center">
                <Link to='/shop'>
                    Shop
                </Link>
            </div>
            <div className="flex w-1/5 h-full items-center justify-end md:justify-center">
                <Link to='/'>
                    Contact
                </Link>
            </div>
            
        </div>
    </div>
);

export default Header;

