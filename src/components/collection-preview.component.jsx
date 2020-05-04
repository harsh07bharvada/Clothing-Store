import React from 'react';
import CollectionItem from './collection-item.component'

const CollectionPreview = ({title,items}) => {
    return (
        <div className="flex flex-col w-full h-auto border py-6 ">
            <div className="flex justify-start font-bold text-3xl text-gray-800 tracking-wider mx-2 md:mx-10">
                <span>{title}</span>
            </div>
            <div className="flex flex-row w-full h-auto my-2 ">
                {
                    items.filter((item,index)=>index<4).map((item)=>(
                        <CollectionItem key={item.id} item={item} />
                        
                    ))
                }
            </div>
            
        </div>
    )
}

export default CollectionPreview;