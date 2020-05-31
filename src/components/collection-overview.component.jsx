import React from 'react';
import {connect} from 'react-redux';
import {selectCollectionFromShop} from '../redux/shop/shop.selectors';
import CollectionPreview from '../components/collection-preview.component';

const CollectionOverview = ({collections})=>(

    <div className="flex flex-col bg-gray-200 w-full h-full">
        {
            Object.values(collections).map(({id,...otherCollections})=>(
                <CollectionPreview key={id} {...otherCollections} />
            ))
        }
    </div>
);

const mapStateToProps = state =>({
    collections: selectCollectionFromShop(state)
})

export default connect(mapStateToProps)(CollectionOverview);