import classes from './index.module.css';
import Header from '../../components/Header/Header';
import CloseButton from '../../components/CloseButton/CloseButton';

function Register() {
  const changeToLogin = () => {
    window.location.href = '/login';
  };

  return (
    <>
      <Header />
      <div className={classes.registerContainer}>
        <CloseButton />
        <h1>Register</h1>
        <div className={classes.registerInputContainer}>
          <span>Email</span>
          <input type="email" id="email" />
          <span>Name</span>
          <input type="text" id="name" />
          <span>Password</span>
          <input type="password" id="password" />
          <span>Confirm Password</span>
          <input type="password" id="confirmPassword" />
        </div>
        <button className={classes.registerButton}>Register</button>
        <span className={classes.loginLink} onClick={changeToLogin}>
          Already have account? Click to login
        </span>
      </div>
    </>
  );
}

export default Register;
