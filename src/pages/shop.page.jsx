import React from 'react';
import SHOP_DATA from '../data/shop.data.js';
import CollectionPreview from '../components/collection-preview.component';

class ShopPage extends React.Component{
    
    constructor(props){
        super(props);
        this.state ={
            collections : SHOP_DATA
        }
    }
    render(){
        const {collections} = this.state;
        return (
            <div className="flex flex-col bg-gray-100 w-full h-full">
                {
                    collections.map(({id,...otherCollections})=>(
                        <CollectionPreview key={id} {...otherCollections} />
                    ))
                }
            </div>
        );
    }
}

export default ShopPage;