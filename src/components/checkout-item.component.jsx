import React from 'react';
import {connect} from 'react-redux';
import {clearItemFromCart,addItems,removeItem} from '../redux/cart/cart.actions'

const CheckoutItem = ({cartItem,clearItem,addItems,removeItem})=>{
    
    const {imageUrl,name,price,quantity} = cartItem;
    return(
        <div className="flex w-4/5 md:w-3/5 h-auto bg-white px-2 shadow-xl text-ms text-black">
            <div className="flex w-1/5 h-auto py-4 justify-center items-center">
                <img className="w-10 h-10 rounded-md" src={imageUrl} alt=""/>
            </div>
            <div className="flex w-1/5 h-auto py-4 justify-center items-center">{name}</div>
            <div className="flex w-1/5 h-auto py-4 justify-center items-center ">
                <div onClick={()=>removeItem(cartItem)} className="flex px-2 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left"><polyline points="15 18 9 12 15 6"></polyline></svg></div>
                <div className="flex px-2 ">{quantity}</div>
                <div onClick={()=>addItems(cartItem)} className="flex px-2 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg></div>
            </div>
            <div className="flex w-1/5 h-auto py-4 justify-center items-center">${price}</div>
            <div onClick={()=>clearItem(cartItem)} className="flex w-1/5 h-auto py-4 justify-center items-center cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></div>
        </div>
)};


const mapDispatchToProps = dispatch =>({
    clearItem : item=>dispatch(clearItemFromCart(item)),
    addItems : item=>dispatch(addItems(item)),
    removeItem : item=>dispatch(removeItem(item))
})
export default connect(null,mapDispatchToProps)(CheckoutItem);