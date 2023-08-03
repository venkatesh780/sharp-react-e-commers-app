import classes from "./Home.module.css";
import { useState, useEffect, useCallback } from "react";
import ErrorElement from "./ErrorElement";
import AddMoviesForm from "./AddMoviesForm";

const toursList = [
  {
    id: "t1",
    date: "JUL 16",
    singer: "DETROIT, MI",
    venue: "DTE ENERGY MUSIC THEATRE",
  },
  {
    id: "t2",
    date: "JUL 16",
    singer: "DETROIT, MI",
    venue: "DTE ENERGY MUSIC THEATRE",
  },
  {
    id: "t3",
    date: "JUL 16",
    singer: "DETROIT, MI",
    venue: "DTE ENERGY MUSIC THEATRE",
  },
  {
    id: "t4",
    date: "JUL 16",
    singer: "DETROIT, MI",
    venue: "DTE ENERGY MUSIC THEATRE",
  },
  {
    id: "t5",
    date: "JUL 16",
    singer: "DETROIT, MI",
    venue: "DTE ENERGY MUSIC THEATRE",
  },
];
const Home = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [isError, setIsError] = useState(false);

  let intervalId;
  useEffect(() => {
    getMovies();
    if (isError) {
      intervalId = setInterval(() => {
        getMovies();
      }, 5000);
    }
  }, [isError]);

  const stopIntervalHandler = useCallback(() => {
    clearInterval(intervalId);
  });

  const getMovies = async () => {
    try {
      const response = await fetch("https://swapi.dev/api/films");
      const responseData = await response.json();
      const data = [...responseData.results];
      setMoviesList([...data]);
    } catch (e) {
      setIsError(true);
    }
  };
  const tourListItems = (
    <ul className={classes.list}>
      {moviesList.map((item) => {
        return (
          <li key={item.episode_id}>
            <span>{item.release_date}</span>
            <span>{item.title}</span>
            <span>{item.director}</span>
            <button>BUY TICKETS</button>
          </li>
        );
      })}
    </ul>
  );
  return (
    <div>
      <AddMoviesForm />
      <h1>Tours</h1>
      {!isError && moviesList.length === 0 ? (
        <p>Data is loading...</p>
      ) : (
        tourListItems
      )}
      {moviesList.length === 0 && isError && (
        <ErrorElement onCancel={stopIntervalHandler} />
      )}
    </div>
  );
};

export default Home;
