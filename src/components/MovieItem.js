import classes from "./MovieItem.module.css";

const MovieItem = (props) => {
  const item = props.item;

  const deleteMovieHander = () => {
    props.onDeleteItem(item.episode_id);
  };

  return (
    <li key={item.episode_id} className={classes.movie_item}>
      <span>{item.release_date}</span>
      <span>{item.title}</span>
      <span>{item.director}</span>
      <button>BUY TICKETS</button>
      <button className={classes.delete_btn} onClick={deleteMovieHander}>
        Delete Movie
      </button>
    </li>
  );
};

export default MovieItem;
