import React from 'react';
import { connect } from 'react-redux';
import { deleteBook } from '../../redux/actions/index';
import { favoriteBook } from '../../redux/actions/index';
import BooksNavigation from "../../components/books/BooksNavigation";


class Single extends React.Component {

    handleDelete = (e) => {
        this.props.deleteBook(e.target.value);
        this.props.history.push('/list');
    };

    handleFavorite = (e) => {
        this.props.favoriteBook(e.target.value);
    };


  render() {

      const { books } = this.props;
      let currentId = this.props.match.params.id;
      const currentBook = books.filter(book => book.id === +currentId);


      if (currentBook.length === 0) {
          this.props.history.push('/list');
          return <div> </div>
      }
      const  book = currentBook[0];



      return (
          <div>
              <BooksNavigation />
              <table className="table">
          <thead>
          <tr>
              <th>Название</th>
              <th>Цена</th>
              <th>Автор</th>
              <th width="25%">Опции</th>
          </tr>
          </thead>
          <tbody>
              <tr key={book.id}>
                  <td>{book.title}</td>
                  <td>{book.price} RUB</td>
                  <td>{book.author}</td>
                  <td>
                      <button value={book.id} onClick={this.handleDelete} style={{marginRight:'10px'}} className="btn btn-sm btn-danger">
                          Удалить
                      </button>
                      <button value={book.id} onClick={this.handleFavorite} className="btn btn-sm btn-primary">
                          Избранное
                      </button>
                  </td>
              </tr>
          </tbody>
      </table>
          </div>
    )
  }
}



const mapStateToProps = (state) => {
    return {
        books: state.books.books,
        currentId: state.books.currentId
    }
};
export default connect(mapStateToProps, { deleteBook, favoriteBook })(Single);
