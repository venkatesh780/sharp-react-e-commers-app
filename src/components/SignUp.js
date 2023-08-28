import classes from "./SignUp.module.css";
import { useRef, useState } from "react";

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [formTitle, setFormTitle] = useState("Sign Up");
  const emailInputRef = useRef("");
  const passwordInputRef = useRef("");

  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    const creds = {
      email: email,
      password: password,
      returnSecureToken: true,
    };

    if (creds.email === "" || creds.password === "") {
      alert("Invalid creds");
    }
    console.log(creds);
    let url = "";
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAQHGDwuaaFsjKMS1h8GbOCG3sJQqPAcVY";
      console.log("login working");
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAQHGDwuaaFsjKMS1h8GbOCG3sJQqPAcVY";
      console.log("signup working");
    }
    setIsLoading(true);
    fetch(url, {
      method: "POST",
      body: JSON.stringify(creds),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication Failed!";

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        setIsLoading(false);
        console.log(data);
      })
      .catch((error) => {
        alert(error.messsage);
      });
    emailInputRef.current.value = "";
    passwordInputRef.current.value = "";
  };

  const enableLoginHander = (e) => {
    e.preventDefault();
    setFormTitle("Login");
    setIsLogin(true);
  };
  const enableSignupHandler = (e) => {
    e.preventDefault();
    setFormTitle("Sign Up");
    setIsLogin(false);
  };

  return (
    <div className={classes.signup_form}>
      <h2>{formTitle}</h2>
      <form onSubmit={submitHandler}>
        <div className={classes.form_input}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div className={classes.form_input}>
          <label htmlFor="password">Your Password</label>
          <input type="text" id="password" ref={passwordInputRef} />
        </div>
        <div className={classes.buttons_container}>
          {!isLoading && !isLogin && (
            <div>
              <button>Create Account</button>
              <button onClick={enableLoginHander}>
                Login With Exiting Account
              </button>
            </div>
          )}
          {!isLoading && isLogin && (
            <div>
              <button>Login</button>
              <button onClick={enableSignupHandler}>create New Account</button>
            </div>
          )}
        </div>
        {isLoading && <p>Sending Request....</p>}
      </form>
    </div>
  );
};

export default SignUp;