import React from 'react';
import toggleCartHidden from '../redux/cart/cart.actions';
import {connect} from 'react-redux';
import {ReactComponent as CartIconImage} from '../assets/bag.svg';

const CartIcon = ({toggleCartHidden})=>(
    <>
        <div className="flex w-1/2 h-full justify-center items-center" onClick={toggleCartHidden}>
            <CartIconImage className="h-5 md:h-8 "/>
        </div>
        <div className=" flex w-1/2 h-full justify-center items-center "> 
            <div className="flex bg-red-600 rounded-full h-5 md:h-8 w-5 md:w-8 text-white font-bold justify-center items-center">0</div>
        </div>
    </>
)
const mapDispatchToProps = (dispatch) =>({
    toggleCartHidden: ()=> dispatch(toggleCartHidden())
})
export default connect(null,mapDispatchToProps)(CartIcon);