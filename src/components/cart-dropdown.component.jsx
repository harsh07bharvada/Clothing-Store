import React from 'react';
import {connect} from 'react-redux';
import CartItem from './cart-item.component';
import {selectCartItems} from '../redux/cart/cart.selectors';
import {withRouter} from 'react-router-dom';

const CartDropdown =({cartItems,history})=>(

    <div className="absolute w-64 h-64 right-0 mt-40 mr-10 md:mr-32 bg-white border border-gray-300 rounded-md z-40 shadow-2xl">
        <div className="flex flex-col w-full h-full justify-end items-center p-3">
            <div className={"flex flex-col h-48 w-full overflow-y-scroll "+ (cartItems.length?" ":" justify-center items-center ")}>
                {
                    cartItems.length?
                        cartItems.map(item=>
                            <CartItem key={item.id} {...item} />)
                    : <span> Cart is empty</span>
                    
                    }
            </div>
            <div onClick={()=>history.push('./checkout')} className="flex w-full h-12 rounded-md bg-indigo-700 text-xl text-white font-semibold justify-center items-center">
                Checkout
            </div>
        </div>
    </div>
)

const mapStateToProps = (state)=>({
    cartItems : selectCartItems(state)
});
export default withRouter(connect(mapStateToProps)(CartDropdown));