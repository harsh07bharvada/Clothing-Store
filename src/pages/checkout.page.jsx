import React from 'react';
import {connect} from 'react-redux';
import {selectCartItems} from '../redux/cart/cart.selectors'

const CheckoutPage = ({cartItems}) =>(
    <div className="flex flex-col w-full h-auto ">
        <div className="flex w-full h-auto py-12  font-semibold text-3xl justify-center items-center text-gray-800">
            My Cart
        </div>
        <div className="flex flex-col  w-full h-auto py-5 text-xs text-gray-700 font-semibold uppercase justify-center items-center">
            <div className="flex w-3/5 h-auto bg-gray-100 rounded-t-lg px-2 shadow-xl">
                <div className="flex w-1/5 h-auto py-4 justify-center items-center">Product</div>
                <div className="flex w-1/5 h-auto py-4 justify-center items-center">Description</div>
                <div className="flex w-1/5 h-auto py-4 justify-center items-center">Quantity</div>
                <div className="flex w-1/5 h-auto py-4 justify-center items-center">Price</div>
                <div className="flex w-1/5 h-auto py-4 justify-center items-center">Remove</div>
            </div>
            {
                cartItems.map(({imageUrl,name,price,quantity})=>(
                            <div className="flex w-3/5 h-auto bg-white px-2 shadow-xl text-ms text-black">
                                <div className="flex w-1/5 h-auto py-4 justify-center items-center">
                                    <img className="w-10 h-10 rounded-md" src={imageUrl} alt=""/>
                                </div>
                                <div className="flex w-1/5 h-auto py-4 justify-center items-center">{name}</div>
                                <div className="flex w-1/5 h-auto py-4 justify-center items-center">{quantity}</div>
                                <div className="flex w-1/5 h-auto py-4 justify-center items-center">{price}</div>
                                <div className="flex w-1/5 h-auto py-4 justify-center items-center">X</div>
                            </div>
                        )
                )
            }
            <div className="flex w-3/5 h-auto bg-gray-100 rounded-b-lg px-2 text-black shadow-xl justify-end items-center">
                
                <div className="flex w-1/5 h-auto py-4 justify-center items-center">Total</div>
                <div className="flex w-1/5 h-auto py-4 justify-center items-center">$0</div>
            </div>
        </div>
    </div>
);

const mapStateToProps = state =>({
    cartItems : selectCartItems(state)
})

export default connect(mapStateToProps)(CheckoutPage);