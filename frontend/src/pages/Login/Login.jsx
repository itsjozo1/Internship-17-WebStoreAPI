import classes from './index.module.css';
import Header from '../../components/Header/Header';
import CloseButton from '../../components/CloseButton/CloseButton';

function Login() {
  const changeToRegister = () => {
    window.location.href = '/register';
  };

  return (
    <>
      <Header />
      <div className={classes.loginContainer}>
        <CloseButton />
        <h1>Login</h1>
        <div className={classes.loginInputContainer}>
          <span>Email</span>
          <input type="email" id="email" />
          <span>Password</span>
          <input type="password" id="password" />
        </div>
        <button className={classes.loginButton}>Login</button>
        <span className={classes.registerLink} onClick={changeToRegister}>
          Register
        </span>
      </div>
    </>
  );
}

export default Login;
