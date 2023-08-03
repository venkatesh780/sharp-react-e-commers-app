import classes from "./Contactus.module.css";
import { useRef, useState } from "react";

const Contactus = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const phoneRef = useRef("");
  const queryRef = useRef("");

  const [isSending, setIsSending] = useState(false);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const user = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      query: queryRef.current.value,
    };
    sendUser(user);
    nameRef.current.value = "";
    emailRef.current.value = "";
    phoneRef.current.value = "";
    queryRef.current.value = "";
  };

  const sendUser = async (user) => {
    try {
      setIsSending(true);
      const response = await fetch(
        "https://ecommers-b566b-default-rtdb.firebaseio.com/users.json",
        {
          method: "POST",
          body: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.log(e.message);
    }
    setIsSending(false);
  };
  return (
    <>
      <form className={classes.form} onSubmit={formSubmitHandler}>
        <h3> Fill Details, we will getback to you... </h3>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" ref={nameRef} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="type" id="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input type="text" id="phone" ref={phoneRef} />
        </div>
        <div>
          <label htmlFor="text">Query</label>
          <input type="textarea" id="text" ref={queryRef} rows="20" cols="50" />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
      {isSending && <p>please wait data is submiting....</p>}
    </>
  );
};

export default Contactus;
