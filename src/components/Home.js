import classes from "./Home.module.css";
import { useState, useEffect } from "react";

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

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const response = await fetch("https://swapi.dev/api/films");
    const responseData = await response.json();
    const data = [...responseData.results];
    setMoviesList([...data]);
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
      <h1>Tours</h1>
      {moviesList.length === 0 ? <p>Data is loading...</p> : tourListItems}
    </div>
  );
};

export default Home;
