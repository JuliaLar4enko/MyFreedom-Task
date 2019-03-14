export const createBook = (book)   => ({ type: "CREATE_BOOK", payload: book   });
export const deleteBook = (bookId) => ({ type: "DELETE_BOOK", payload: bookId });
export const favoriteBook = (bookId) => ({ type: "FAVORITE_BOOK", payload: bookId });
export const deleteFavoriteBook = (bookId) => ({ type: "DELETE_FAVORITE_BOOK", payload: bookId });
export const addLike = (bookId) => ({ type: "ADD_LIKE", payload: bookId });
export const addDislike = (bookId) => ({ type: "ADD_DISLIKE", payload: bookId });

