import { combineReducers } from 'redux';

import usersReducer from './usersReducer';
import booksReducer from './booksReducer';
import petsReducer from './petsReducer';
import weatherWidgetReducer from './weatherWidgetReducer';
import memesReducer from './memesReducer';
import youtubeReducer from './youtubeReducer';

const reducers = combineReducers({
    pets: petsReducer,
    weather: weatherWidgetReducer,
    youtube: youtubeReducer,
    books: booksReducer,
    memes: memesReducer,
    users: usersReducer,
});

export default reducers;