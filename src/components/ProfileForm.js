import classes from "./Profile.module.css";
import { useRef, useContext } from "react";
import TokenContext from "../utils/TokenContext";

const ProfileForm = () => {
  const newPasswordRef = useRef();
  const tokenCtx = useContext(TokenContext);

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredNewPassword = newPasswordRef.current.value;
    console.log(enteredNewPassword);
    newPasswordRef.current.value = "";

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAQHGDwuaaFsjKMS1h8GbOCG3sJQqPAcVY",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: tokenCtx.token,
          password: enteredNewPassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      console.log(res.json());
    });
  };
  return (
    <form className={classes.profile_form} onSubmit={submitHandler}>
      <div>
        <div>
          <label htmlFor="new-password">New Password</label>
          <input
            type="password"
            id="new-password"
            minlen="7"
            ref={newPasswordRef}
          />
        </div>
        <div>
          <button>change password</button>
        </div>
      </div>
    </form>
  );
};

export default ProfileForm;
