import classes from './index.module.css';
import Header from '../../components/Header/Header';
import CloseButton from '../../components/CloseButton/CloseButton';
import { getCart, getWishlist } from '../../searchProducts.js';

function Register() {
  const changeToLogin = () => {
    window.location.href = '/login';
  };

  const handleRegister = () => {
    const email = document.getElementById('email').value;
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!email || !name || !password || !confirmPassword) {
      alert('All fields are required');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    console.log(
      JSON.stringify({ email: email, name: name, password: password }),
    );

    fetch('/api/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email, name: name, password: password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert(data.message);
        } else {
          alert('User registered successfully');

          if (localStorage.getItem('user')) {
            localStorage.removeItem('user');
          }

          localStorage.setItem(
            'user',
            JSON.stringify({ token: data.token, name: data.name }),
          );

          getCart(data.id);
          getWishlist(data.id);

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
        <button className={classes.registerButton} onClick={handleRegister}>
          Register
        </button>
        <span className={classes.loginLink} onClick={changeToLogin}>
          Already have account? Click to login
        </span>
      </div>
    </>
  );
}

export default Register;
