import React from 'react';



const CartItem = ({name, imageUrl, price, quantity})=>(
    <div className="flex w-full h-12 justify-center items-center py-4  ">
        
        <div className="flex w-1/3 h-10 justify-center items-center"><img className="h-10 w-10 rounded-md " src={imageUrl} alt="item"/></div>
        <div className="flex flex-col w-2/3 h-10 ">
            <div className="flex w-full h-5 text-sm font-semibold justify-center items-center">{name}</div>
            <div className="flex w-full h-5 text-xs  justify-center items-center">{quantity} X ${price}</div>
        </div>
    </div>
);


export default CartItem;