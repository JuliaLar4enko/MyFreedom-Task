const initialState = {
    books: [],
    favorites: [],
    authors: ['Эрих Мария Ремарк', 'Достоевский', 'Дэн Браун'],
    currentId: 1
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "CREATE_BOOK":
            return {                    // вернуть новый стейт
                ...state,                 // разложить в него текущий стейт
                books: [                  // книги пополнить
                    ...state.books,         // взять текущие книги и разложить в новый массив
                    {
                        ...action.payload,    // пополнить новой книгой   {price: 32, title: 'kek', id: 1}
                        id: state.currentId,   // вложить в книгу id
                    }
                ],
                currentId: state.currentId + 1
            };


        case "DELETE_BOOK":
            return {
                ...state,
                books: [
                    ...state.books.filter(function(book) {
                        return book.id !== +action.payload
                    })
                ]
            };

        case "FAVORITE_BOOK":
            return {
                ...state,
                favorites:  [
                    ...state.favorites,
                    +action.payload
                ]
            };

        case "DELETE_FAVORITE_BOOK":
            return {
                ...state,
                favorites: [
                    ...state.favorites.filter(function(id) {
                        console.log('Reducers: book id', id, 'action payload', action.payload);
                        return id !== parseInt(action.payload)
                    })
                ]
            };

        case "ADD_LIKE":
            return {
                ...state,
                books: state.books.map(book => {

                    if (book.id === +action.payload) {
                        return {
                            ...book,
                            likes: book.likes+1
                        }
                    }
                    return book;
                })
            };


        case "ADD_DISLIKE":
            return {
                ...state,
                books: state.books.map(book => {
                    if (book.id === +action.payload) {
                        return {
                            ...book,
                            dislikes: book.dislikes+1
                        }
                    }
                    return book;
                })

            };



        default:
            return state;
    }
}