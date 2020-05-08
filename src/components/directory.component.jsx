import React from 'react';
import MenuItem from './menu-item.component';
import {connect} from 'react-redux';
import selectSelectionSelector from '../redux/directory/directory.selector';

const  Directory = ({sections})=>(

    <>
        { sections.map(({title,imageUrl,id})=>{
            return(
                <MenuItem title={title} imageUrl={imageUrl} key={id} />
            );})
        }
    </>
);


const mapStateToProps = state => ({
    sections : selectSelectionSelector(state)
});

export default connect(mapStateToProps)(Directory);