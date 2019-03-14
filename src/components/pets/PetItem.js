import React from 'react';

function PetItem(props) {
    const {date,time, pet, owner, description, index, handleDelete} = props;

    return (
        <li className='border-bottom'  style={{marginTop:'15px'}}>
            <div className="float-right">{`${date} ${time}`}</div>
            <h3>
                <span>{pet}</span>
                <button className="btn btn-danger btn-sm" style={{marginLeft:'15px'}} onClick={() => { handleDelete(index) }}>
                    Удалить
                </button>
            </h3>
            <h5>{owner}</h5>
            <p>{description}</p>
        </li>
    )
}


export default PetItem;