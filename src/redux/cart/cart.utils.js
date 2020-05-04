export const addItemsToCart = (prevCartItems,newItem)=>{

    const doesExists = prevCartItems.find(eachItem=>eachItem.id === newItem.id);

    if(doesExists)
    {
        return prevCartItems.map(eachItem=>{
            if(eachItem.id === newItem.id)
            {
                return {
                    ...eachItem,
                    quantity:eachItem.quantity+1
                }
            }
            else
                return eachItem;
        });
    }
    else
        return [...prevCartItems,{ ...newItem,quantity:1}];
}
