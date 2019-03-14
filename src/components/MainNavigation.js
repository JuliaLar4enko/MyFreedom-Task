import React from 'react';
import {Link} from 'react-router-dom';


function MainNavigation() {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light mb-3">
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to='/pets'>Учет животных</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/weather'>Погодный виджет</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/youtube'>Поиск ролика</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/add'>Книжный сервис</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/memes'>Генератор мемов</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/users'>Юзеры</Link>
                    </li>
                </ul>
            </div>
        </nav>


    )
}

export default MainNavigation;


