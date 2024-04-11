import classes from './index.module.css';
import Header from '../../components/Header/Header';
import CloseButton from '../../components/CloseButton/CloseButton';

function Login() {
  const changeToRegister = () => {
    window.location.href = '/register';
  };

  const handleLogin = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
      alert('All fields are required');
      return;
    }

    console.log(JSON.stringify({ email: email, password: password }));

    fetch('/api/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          alert('User logged in successfully');

          if (document.cookie) {
            document.cookie = '';
          }
          document.cookie = `token=${data.token}`;
          document.cookie = `name=${data.name}`;

          window.location.href = '/orders';
        }
      })
      .catch((error) => {
        alert('An error occurred');
        console.error(error);
      });
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
        <button className={classes.loginButton} onClick={handleLogin}>
          Login
        </button>
        <span className={classes.registerLink} onClick={changeToRegister}>
          Register
        </span>
      </div>
    </>
  );
}

export default Login;
