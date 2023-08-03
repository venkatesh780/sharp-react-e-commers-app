import classes from "./AddMoviesForm.module.css";
import { useRef } from "react";

const AddMoviesForm = (props) => {
  const titleRef = useRef("");
  const releaseDateRef = useRef("");
  const directorRef = useRef("");

  const formSubmitHandler = (event) => {
    event.preventDefault();
    // const id = Math.floor(Math.random() * 1000);
    const movieObj = {
      title: titleRef.current.value,
      release_date: releaseDateRef.current.value,
      director: directorRef.current.value,
    };
    props.onSendMovie(movieObj);

    titleRef.current.value = "";
    releaseDateRef.current.value = "";
    directorRef.current.value = "";
  };
  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <h3>Add Movies </h3>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleRef} />
      </div>
      <div>
        <label htmlFor="date">Release Data</label>
        <input
          type="type"
          id="date"
          placeholder="yyyy-mm-dd"
          ref={releaseDateRef}
        />
      </div>
      <div>
        <label htmlFor="director">Director</label>
        <input type="text" id="director" ref={directorRef} />
      </div>
      <div>
        <button>Add Movie</button>
      </div>
    </form>
  );
};

export default AddMoviesForm;
