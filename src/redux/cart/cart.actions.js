import cardActiontypes from './cart.types';


export const toggleCartHidden = ()=>({
    type: cardActiontypes.TOGGLE_CART_HIDDEN
});

export const addItems = item =>({
    type:cardActiontypes.ADD_ITEM,
    payload : item
})