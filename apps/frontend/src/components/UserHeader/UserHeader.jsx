import classes from './index.module.css';
import { useNavigate } from 'react-router-dom';

function UserHeader() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    const confirmed = window.confirm('Are you sure you want to logout?');
    if (confirmed) {
      localStorage.removeItem('user');
      localStorage.removeItem('cart');
      localStorage.removeItem('wishlist');
      navigate('/');
    }
  };

  return (
    <>
      <div className={classes.header}>
        <h1
          className={classes.headline}
          onClick={() => {
            navigate(`/`);
          }}
        >
          Web Shop
        </h1>
        <nav className={classes.headerNavbar}>
          <a href="/wishlist">wishlist</a>
          <a href="/cart">cart</a>
          <a href="/orders">orders</a>
          <a href="#" onClick={handleLogout}>
            logout
          </a>
        </nav>
      </div>
      <h3 className={classes.userNameHeader}>{user.name}</h3>
    </>
  );
}

export default UserHeader;
