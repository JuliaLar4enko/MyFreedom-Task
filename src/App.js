import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import MainNavigation from './components/MainNavigation';

import PetsApp from './screens/pets/PetsApp';
import WeatherWidget from './screens/weatherWidget/WeatherWidget'
import YouTube from './screens/youtube/YouTubeSearch';
import OneVideo from './screens/youtube/OneVideo';
import Form   from './screens/books/Form';
import List   from './screens/books/List';
import Single from './screens/books/Single';
import Favorites from "./screens/books/Favorites";
import Users from './screens/users/Users';
import Memes from './screens/memes/Memes';



class App extends Component {
  render() {
    return (
      <div>
        <MainNavigation />
        <div className="container">
          <Route exact  path='/pets'       component={PetsApp} />

          <Route        path='/weather'    component={WeatherWidget} />

          <Route        path='/youtube'    component={YouTube} />
          <Route        path='/video/:id'   component={OneVideo} />

          <Route        path="/list"       component={List} />
          <Route        path="/add"        component={Form} />
          <Route        path="/books/:id"  component={Single} />
          <Route        path="/favorites"  component={Favorites} />

          <Route        path='/memes'      component={Memes} />

          <Route        path='/users'      component={Users} />

        </div>
      </div>
    );
  }
}

export default App;
