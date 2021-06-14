import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom' //imported Route
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie' //Imported Movie
import MovieList from './Movies/MovieList' //Imported MovieList


export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          console.log('res.data for App.js', response.data)
          setMovieList(response.data)
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />

      <Switch>
        {/* Add one route for `/` */}
        <Route exact path='/'>
         {/* Make first Route load MovieList and add movies as a prop */}
         <MovieList movies={movieList}/> 
       </Route>

        {/* Add one route that will take an `id` parameter after`/movies/` (ex: `/movies/2`, `/movies/3` where the id is dynamic) ' */}
        <Route path='/movies/:id'>
          {/* Make second route load Movie */}
          <Movie />
        </Route>
      </Switch>
    </div>
  );
}
