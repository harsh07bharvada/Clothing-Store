const INITIAL_STATE = {
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


const DirectoryReducer = (state = INITIAL_STATE,action) =>{

    switch(action.type)
    {
        default : return state;
    }
}

export default DirectoryReducer;