import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {addLike, addDislike} from "../../redux/actions/index";
import BooksNavigation from "../../components/books/BooksNavigation";


class List extends React.Component {

    handleLike = (e) => {
        this.props.addLike(e.target.value);
    };

    handleDislike = (e) => {
        this.props.addDislike(e.target.value);
    };

    render() {
        const {books} = this.props;

        if (books.length === 0) {
            return (
                <div>
                    <BooksNavigation />
                <div className="alert alert-dark" role="alert">
                    Книг нет
                </div>
                </div>
            )
        }


        return (
            <div>
            <BooksNavigation />
            <table className="table">
                <thead>
                <tr>
                    <th>Название</th>
                    <th>Цена</th>
                    <th>Автор</th>
                    <th width="15%">Опции</th>
                    <th>Рейтинг</th>
                </tr>
                </thead>
                <tbody>
                {books.map((book) => {
                    return (
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>{book.price} RUB</td>
                            <td>{book.author}</td>
                            <td>
                                <Link to={`/books/${book.id}`} className="btn btn-outline-secondary btn-sm">
                                    Посмотреть
                                </Link>
                            </td>
                            <td>
                                <button value={book.id} onClick={this.handleLike} style={{marginRight:'10px'}} className="btn btn-sm btn-outline-success">Like {book.likes}</button>
                                <button value={book.id} onClick={this.handleDislike} className="btn btn-sm btn-outline-danger">Dislike {book.dislikes}</button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        books: state.books.books
    }
};
export default connect(mapStateToProps, { addLike, addDislike })(List);