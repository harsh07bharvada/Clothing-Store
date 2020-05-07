import React from 'react';
import {connect} from 'react-redux';
import {selectCartItems,calculateCartItemsCostSelector} from '../redux/cart/cart.selectors'

const CheckoutPage = ({cartItems,total}) =>(
    <div className="flex flex-col w-full h-auto ">
        <div className="flex w-full h-auto py-12  font-semibold text-3xl justify-center items-center text-gray-700">
            Cart
        </div>
        <div className="flex flex-col  w-full h-auto py-5 text-xs text-gray-600 font-semibold uppercase justify-center items-center">
            <div className="flex w-3/5 h-auto bg-gray-100 rounded-t-lg px-2 shadow-xl">
                <div className="flex w-1/5 h-auto py-6 justify-center items-center">Product</div>
                <div className="flex w-1/5 h-auto py-6 justify-center items-center">Description</div>
                <div className="flex w-1/5 h-auto py-6 justify-center items-center">Quantity</div>
                <div className="flex w-1/5 h-auto py-6 justify-center items-center">Price</div>
                <div className="flex w-1/5 h-auto py-6 justify-center items-center">Remove</div>
            </div>
            {
                (cartItems.length)?(
                cartItems.map(({imageUrl,name,price,quantity})=>(
                            <div className="flex w-3/5 h-auto bg-white px-2 shadow-xl text-ms text-black">
                                <div className="flex w-1/5 h-auto py-4 justify-center items-center">
                                    <img className="w-10 h-10 rounded-md" src={imageUrl} alt=""/>
                                </div>
                                <div className="flex w-1/5 h-auto py-4 justify-center items-center">{name}</div>
                                <div className="flex w-1/5 h-auto py-4 justify-center items-center ">
                                    <div className="flex px-2 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg></div>
                                    <div className="flex px-2 ">{quantity}</div>
                                    <div className="flex px-2 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg></div>
                                </div>
                                <div className="flex w-1/5 h-auto py-4 justify-center items-center">${price}</div>
                                <div className="flex w-1/5 h-auto py-4 justify-center items-center cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>
                            </div>
                        )
                )
                ):(
                    <div className="flex justify-center items-center py-20 font-semibold text-lg text-gray-300  bg-white w-3/5">
                        Cart is empty!!
                    </div>
                )
            }
            <div className="flex w-3/5 h-auto bg-gray-100 rounded-b-lg px-2 text-black shadow-xl justify-end items-center">
                
                <div className="flex w-1/5 h-auto py-6 justify-center items-center">Total</div>
                <div className="flex w-1/5 h-auto py-6 justify-center items-center">${total}</div>
                <div className="flex w-1/5 h-auto py-6 justify-center items-center"></div>
            </div>
        </div>
    </div>
);

const mapStateToProps = (state) =>({
    cartItems : selectCartItems(state),
    total :calculateCartItemsCostSelector(state)
})

export default connect(mapStateToProps)(CheckoutPage);