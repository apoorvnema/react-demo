import { useContext } from 'react';
import classes from './ProfileForm.module.css';
import AuthContext from '../../store/auth-context';
import { useRef } from 'react';

const ProfileForm = () => {
  const authCtx = useContext(AuthContext);
  const newPasswordRef = useRef();
  const updatePasswordHandler = async (event) => {
    event.preventDefault();
    try{
    await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${process.env.REACT_APP_FIREBASE_API_KEY}`, {
      method: 'POST',
      body: JSON.stringify({
        idToken: authCtx.token,
        password: newPasswordRef.current.value,
        returnSecureToken: true
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    alert('Password updated successfully');
  }
  catch(error){
    console.log(error.message);
    alert('Failed to update password');
  };
}

  return (
    <form className={classes.form} onSubmit={updatePasswordHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' minLength="7" ref={newPasswordRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
