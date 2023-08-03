import classes from "./Home.module.css";
import { useState, useEffect, useCallback } from "react";
import ErrorElement from "./ErrorElement";
import AddMoviesForm from "./AddMoviesForm";
import MovieItem from "./MovieItem";

const Home = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [isError, setIsError] = useState(false);

  const AddMoviesHandler = async (movie) => {
    try {
      const response = await fetch(
        "https://ecommers-b566b-default-rtdb.firebaseio.com/movies.json",
        {
          method: "POST",
          body: JSON.stringify(movie),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      console.log(data, "from post");
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);
  const movies = [];

  const getMovies = async () => {
    try {
      const response = await fetch(
        "https://ecommers-b566b-default-rtdb.firebaseio.com/movies.json"
      );
      const data = await response.json();
      console.log(data);
      for (const key of Object.keys(data)) {
        movies.push({
          episode_id: key,
          title: data[key].title,
          release_date: data[key].release_date,
          director: data[key].director,
        });
      }
      setMoviesList([...movies]);
    } catch (e) {
      console.log(e);
      setIsError(true);
    }
  };

  const deleteMovieHandler = async (id) => {
    try {
      const URL = `https://ecommers-b566b-default-rtdb.firebaseio.com/movies/${id}.json`;
      const response = await fetch(URL, {
        method: "DELETE",
      });
      const data = await response.json();
    } catch (e) {
      console.log(e.message);
    }
  };
  const tourListItems = (
    <ul className={classes.list}>
      {moviesList.map((item) => {
        return (
          <MovieItem
            item={item}
            key={item.episode_id}
            onDeleteItem={deleteMovieHandler}
          />
        );
      })}
    </ul>
  );
  return (
    <div>
      <AddMoviesForm onSendMovie={AddMoviesHandler} />
      <h1>Tours</h1>
      {!isError && moviesList.length === 0 ? (
        <p>Data is loading...</p>
      ) : (
        tourListItems
      )}
      {moviesList.length === 0 && isError && <ErrorElement />}
    </div>
  );
};

export default Home;
