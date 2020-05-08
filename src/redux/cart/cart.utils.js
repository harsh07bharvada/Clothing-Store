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
};

export const removeItem = (prevCartItems,newItem)=>{

    const existingItem = prevCartItems.find(item=> item.id === newItem.id);
    if(existingItem)
    {
        if(existingItem.quantity === 1)
        {
            return prevCartItems.filter(item=> item.id !== newItem.id);
        }
        else
        {
            return prevCartItems.map(item=>{
                if(item.id === newItem.id)
                {
                    return {
                        ...item,
                        quantity : item.quantity - 1
                    }
                }
                else
                    return item;
            })
        }
    }

}
