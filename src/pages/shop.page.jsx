import React from 'react';
import {connect} from 'react-redux';
import {selectCollectionFromShop} from '../redux/shop/shop.selectors'
import CollectionOverview from '../components/collection-overview.component';

const ShopPage = ()=>(

    <CollectionOverview />
);

const mapStateToProps = state =>({
    collections: selectCollectionFromShop(state)
})

export default connect(mapStateToProps)(ShopPage);