import React from 'react';
import MenuItem from './menu-item.component'

class Directory extends React.Component{

    constructor()
    {
        super();
        this.state={
            sections:[
                {
                    title: 'Sneakers',
                    imageUrl : './images/sneakers.jpg',
                    id:3
                },
                {
                    title: 'Jackets',
                    imageUrl : './images/jackets.jpg',
                    id:2
                },
                {
                    title: 'Hats',
                    imageUrl : './images/hats.jpg',
                    id:1
                },
                {
                    title: 'Mens',
                    imageUrl : './images/mens.jpg',
                    id:4
                },
                {
                    title: 'Womens',
                    imageUrl : './images/womens.jpg',
                    id:5
                }

            ]
        }
    }

    render()
    {
        return(
            <>
                {
                    this.state.sections.map(({title,imageUrl,id})=>{
                        return(
                            <MenuItem title={title} imageUrl={imageUrl} id={id} />
                        );
                    })
                }
            </>
        );
    }

}

export default Directory;