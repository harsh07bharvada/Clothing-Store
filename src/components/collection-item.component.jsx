import React from 'react';
import {addItems} from '../redux/cart/cart.actions';
import {connect} from 'react-redux';

const CollectionItem = ({item,addItems})=>(
    <div className="flex flex-col md:w-1/4 h-auto justify-center items-center cursor-pointer  md:py-5">
        <div style={ {  backgroundImage:`url(${item.imageUrl})` } } 
        className="flex bg-gray-500 h-32 md:h-56 w-24 md:w-4/5 mx-2 rounded shadow-md bg-cover bg-top">
        </div>
        <div className="flex flex-col h-20 w-2/3 bg-white text-xs md:text-base -mt-10 text-center shadow-lg rounded justify-center items-center">
            <span className="flex w-full h-10 justify-center items-center ">{item.name}</span>
            <div className="flex flex-row w-full h-10 bg-gray-200 rounded-b ">
                <span className="flex w-1/3 h-full rounded-bl justify-center items-center md:font-black md:text-lg"> ${item.price} </span>
                <div onClick={()=>addItems(item)} className="flex w-2/3 h-full bg-indigo-700 rounded-br text-white justify-center items-center ">Add to Cart</div>
            </div>
        </div>
    </div>
);

const mapDispatchToProps = dispatch =>({
    addItems : (item)=>dispatch(addItems(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem);