import React from 'react';

function Settings(props) {
    const { search, order, handleInput, handleSort } = props;

    return (
        <div className="settings">
            <div className="form-group row">
                <div className="col-sm-2">
                    <select name="order" className="form-control" onChange={handleSort} value={order}>
                        <option value="no">Без сортировки</option>
                        <option value="az">A-Z</option>
                        <option value="za">Z-A</option>
                    </select>
                </div>
                <div className="col-sm-10">
                    <input type="text" placeholder="Поиск по имени" className="form-control" name="search" value={search} onChange={handleInput}/>
                </div>
            </div>
        </div>
    )
}


export default Settings;