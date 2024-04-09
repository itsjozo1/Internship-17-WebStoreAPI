import classes from './index.module.css';
import Header from '../../components/Header/Header';

function Login() {
  const handleClose = () => {
    window.location.href = '/';
  };

  return (
    <>
      <Header />
      <div className={classes.loginContainer}>
        <button className={classes.closeButton} onClick={handleClose}>
          x
        </button>
        <h1>Login</h1>
        <div className={classes.loginInputContainer}>
          <span>Email</span>
          <input type="email" id="email" />
          <span>Password</span>
          <input type="password" id="password" />
        </div>
        <button className={classes.loginButton}>Login</button>
      </div>
    </>
  );
}

export default Login;
