const INITIAL_STATE = {
    sections:[
        {
            title: 'Sneakers',
            imageUrl : './images/sneakers.jpg',
            id:3,
            linkUrl:'shop/sneakers'
        },
        {
            title: 'Jackets',
            imageUrl : './images/jackets.jpg',
            id:2,
            linkUrl:'shop/jackets'
        },
        {
            title: 'Hats',
            imageUrl : './images/hats.jpg',
            id:1,
            linkUrl:'shop/hats'
        },
        {
            title: 'Mens',
            imageUrl : './images/mens.jpg',
            id:4,
            linkUrl:'shop/mens'
        },
        {
            title: 'Womens',
            imageUrl : './images/womens.jpg',
            id:5,
            linkUrl:'shop/womens'
        }

    ]
}


const DirectoryReducer = (state = INITIAL_STATE,action) =>{

    switch(action.type)
    {
        default : return state;
    }
}

export default DirectoryReducer;