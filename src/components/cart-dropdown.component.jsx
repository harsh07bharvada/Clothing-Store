import React from 'react';

const CartDropdown =()=>(

    <div className="absolute w-64 h-64 right-0 mt-40 mr-10 md:mr-32 bg-gray-100  rounded-md z-40 shadow-2xl">
        <div className="flex flex-col w-full h-full justify-between items-center p-3">
            Item1
            Item2
            <div className="flex w-full h-12 rounded-md bg-indigo-700 text-xl text-white font-semibold justify-center items-center">
                Checkout
            </div>
        </div>
    </div>
)

export default CartDropdown;