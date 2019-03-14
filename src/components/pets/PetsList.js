import React from 'react';

import PetItem from './PetItem.js';


function PetsList(props) {
    const { array, handleDelete } = props;

    return (
        <ul className="list">
            {array.map((client,index) => {
                return (
                    <PetItem key={index} {...client} index={index} handleDelete={handleDelete}/>
                )
            })}
        </ul>
    )
}




export default PetsList;