import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../assets/crown.svg'

const Header = ()=>(
    <div className="flex flex-row h-20 w-full ">
        <Link className="flex justify-start items-center h-full w-1/5 md:mx-20" to='/'>
            <span className="flex justify-start" >
                <Logo className="h-10 w-full"/>
            </span>
        </Link>
        <div className="flex h-full w-4/5 justify-end items-center font-bold text-md md:text-xl">
            <Link className="flex h-full w-1/2 items-center justify-end md:justify-center" to='/shop'>
                Shop
            </Link><Link className="flex h-full w-1/2 items-center justify-start md:justify-center" to='/'>
                Contact
            </Link>
        </div>
    </div>
);

export default Header;

