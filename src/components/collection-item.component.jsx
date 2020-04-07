import React from 'react';


const CollectionItem = ({imageUrl,name,price})=>(
    <div className="flex flex-col w-1/4 h-auto justify-center items-center cursor-pointer">
        <div style={ {  backgroundImage:`url(${imageUrl})` } } 
        className="flex bg-red-200 h-32 md:h-56 w-24 md:w-4/5 mx-2 rounded-sm shadow-md bg-cover bg-top">
            
        </div>
        <div className="flex flex-col h-20 w-2/3 bg-white text-xs md:text-base -mt-5 text-center shadow-lg rounded-md justify-center items-center">
            <span className="flex w-full h-10 justify-center items-center ">{name}</span>
            <div className="flex flex-row w-full h-10 bg-gray-200 rounded-b-lg ">
                <span className="flex w-1/3 h-full rounded-bl-lg justify-center items-center md:font-black md:text-lg"> ${price} </span>
                <div className="flex w-2/3 h-full bg-indigo-700 rounded-br-lg text-white justify-center items-center ">Add to Cart</div>
            </div>
        </div>
    </div>
);

export default CollectionItem;