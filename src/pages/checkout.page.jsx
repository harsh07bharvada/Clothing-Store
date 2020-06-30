import React from 'react';
import {connect} from 'react-redux';
import {selectCartItems,calculateCartItemsCostSelector} from '../redux/cart/cart.selectors';
import CheckoutItem from '../components/checkout-item.component';
import StripeCheckoutButton from '../components/stripe-checkout.component';

const CheckoutPage = ({cartItems,total}) =>(
    <div className="flex flex-col w-full h-auto ">
        <div className="flex w-full h-auto py-12  font-semibold text-3xl justify-center items-center text-gray-700">
            Cart
        </div>
        <div className="flex flex-col  w-full h-auto py-5 text-xs text-gray-600 font-semibold uppercase justify-center items-center">
            <div className="flex w-4/5 md:w-3/5 h-auto bg-gray-100 rounded-t-lg px-2 shadow-xl">
                <div className="flex w-1/5 h-auto py-6 justify-center items-center">Product</div>
                <div className="flex w-1/5 h-auto py-6 justify-center items-center">Description</div>
                <div className="flex w-1/5 h-auto py-6 justify-center items-center">Quantity</div>
                <div className="flex w-1/5 h-auto py-6 justify-center items-center">Price</div>
                <div className="flex w-1/5 h-auto py-6 justify-center items-center">Remove</div>
            </div>
            {
                (cartItems.length)?(
                cartItems.map((cartItem,index)=><CheckoutItem key={index} cartItem={cartItem} />)
                ):(
                    <div className="flex justify-center items-center py-20 font-semibold text-lg text-gray-300  bg-white w-4/5 md:w-3/5">
                        Cart is empty!!
                    </div>
                )
            }
            <div className="flex w-4/5 md:w-3/5 h-auto bg-gray-100 rounded-b-lg px-2 text-black shadow-xl justify-end items-center">
                
                <div className="flex w-1/5 h-auto py-6 justify-center items-center">Total</div>
                <div className="flex w-1/5 h-auto py-6 justify-center items-center">${total}</div>
                <div className="flex w-1/5 h-auto py-6 justify-center items-center">
                    <StripeCheckoutButton price={total} />
                </div>
            </div>
        </div>
        
    </div>
);

const mapStateToProps = (state) =>({
    cartItems : selectCartItems(state),
    total :calculateCartItemsCostSelector(state)
})

export default connect(mapStateToProps)(CheckoutPage);