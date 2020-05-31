import React from 'react';
import {connect} from 'react-redux';
import {selectCollection} from '../redux/shop/shop.selectors';
import CollectionItem from '../components/collection-item.component'

const CollectionPage = ({collection})=>{
    
    const {title,items} = collection;
    return(
        <div className=" flex flex-col">
            <div className="flex w-full h-auto py-2 md:py-5 px-10 font-bold text-3xl text-gray-800 justify-center items-center">{title}</div>
            <div className="flex flex-wrap">
            {
                items.map(item=> (<CollectionItem key={item.id} item={item} />))

            }
            </div>
        </div>
)};

const mapStateToProps = (state,ownProps) =>({
    collection : selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);
