import classes from "./SignUp.module.css";
import { useRef, useState } from "react";

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const emailInputRef = useRef("");
  const passwordInputRef = useRef("");

  const signUpHandler = () => {
    setIsLoading(true);

    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    const creds = {
      email: email,
      password: password,
    };

    if (creds.email === "" || creds.password === "") {
      alert("Invalid creds");
    }
    setIsLoading(false);
  };
  return (
    <div className={classes.signup_form}>
      <form>
        <div className={classes.form_input}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div className={classes.form_input}>
          <label htmlFor="password">Your Password</label>
          <input type="text" id="password" ref={passwordInputRef} />
        </div>
        {isLoading ? (
          <p>Sending request.....</p>
        ) : (
          <button onClick={signUpHandler}>Sign up</button>
        )}
      </form>
    </div>
  );
};

export default SignUp;
