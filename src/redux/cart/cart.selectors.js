import {createSelector} from 'reselect';


const selectCart = state => state.cart;

export const selectCartHidden = createSelector(
    [selectCart],
    (cart)=> cart.hidden
)

export const selectCartItems = createSelector(
    [selectCart],
    (cart)=>  cart.cartItems
);


export const calculateCartItemsCountSelectors = createSelector(
    [selectCartItems],
    (cartItems)=> cartItems.reduce((acummulatedQuantity,cartItem)=>acummulatedQuantity + cartItem.quantity,0)
);


export const calculateCartItemsCostSelector = createSelector(
    [selectCartItems],
    (cartItems)=> cartItems.reduce((acummulatedQuantity,cartItem)=>acummulatedQuantity + cartItem.quantity * cartItem.price,0)
)


