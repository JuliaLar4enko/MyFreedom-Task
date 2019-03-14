import React from 'react';
import { connect } from 'react-redux';
import {deleteFavoriteBook} from '../../redux/actions/index';
import BooksNavigation from "../../components/books/BooksNavigation";


class Favorites extends React.Component {

    handleDelete = (e) => {
        this.props.deleteFavoriteBook(e.target.value);
    };

    render() {

        const { books, favorites } = this.props;
        let favorite = favorites.filter((number,i,ar) => ar.indexOf(number) === i);


        let arrFavorite = [];

        for(let i = 0; i < favorite.length; i++){
            for(let j = 0; j < books.length; j++){
                if(books[j].id === favorite[i]){
                    arrFavorite.push(books[j]);
                }
            }
        }

        if (arrFavorite.length === 0) {
            return (
                <div>
                    <BooksNavigation />
                <div className="alert alert-dark" role="alert">
                    Нет выбранных книг
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
                </tr>
                </thead>
                <tbody>
                {arrFavorite.map((book) => {
                    return (
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>{book.price} RUB</td>
                            <td>{book.author}</td>
                            <td>
                                <button value={book.id} onClick={this.handleDelete} className="btn btn-sm btn-danger">
                                    Удалить
                                </button>
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
        books: state.books.books,
        favorites: state.books.favorites
    }
};
export default connect(mapStateToProps, { deleteFavoriteBook })(Favorites);
