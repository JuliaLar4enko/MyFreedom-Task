import React from 'react';
import {connect} from 'react-redux';

import {createBook} from '../../redux/actions/index';
import BooksNavigation from "../../components/books/BooksNavigation";


class Form extends React.Component {
    state = {
        title: '',
        price: '',
        author: ''
    };

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {title, price, author} = this.state;
        const book = {
            title: title,
            price: price,
            author: author,
            likes:0,
            dislikes: 0
        };

        this.props.createBook(book);
        this.props.history.push('/list');
    };

    render() {
        const {title, price} = this.state;
        const { authors } = this.props;

        return (
            <div>
            <BooksNavigation />
            <form className="form-inline" onSubmit={this.handleSubmit}>
                <div className="form-group mr-3">
                    <input
                        type="text"
                        name="title"
                        className="form-control"
                        placeholder="Название"
                        value={title}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="form-group mr-3">
                    <input
                        type="number"
                        name="price"
                        className="form-control"
                        placeholder="Цена"
                        value={price}
                        onChange={this.handleChange}
                    />
                </div>

                <select className="custom-select" name="author" onChange={this.handleChange}>
                    <option  value='selected'>Автор не указан</option>
                    {authors.map((author, i) => {
                        return (
                            <option key={i} value={author}>
                                {author}
                            </option>
                        )
                    })}
                </select>

                <button type="submit" className="btn btn-primary" style={{marginLeft:'20px'}}>Добавить</button>
            </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authors: state.books.authors
    }
};
export default connect(mapStateToProps, {createBook})(Form);
