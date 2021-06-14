import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom' //imported Route
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

      {/* Add one route for `/` */}
      <Route path='/'>
        {/* Make first Route load MovieList and add movies as a prop */}
        <MovieList movies={movieList}/> 
      </Route>

      {/* Add one route that will take an `id` parameter after`/movies/` (ex: `/movies/2`, `/movies/3` where the id is dynamic) ' */}
    <Route path='/movies/:id'>
      {/* Make second route load Movie and giving  it movie as props */}
      <Movie movie={movieList.id}/>
    </Route>
      <div>Replace this Div with your Routes</div>
    </div>
  );
}
