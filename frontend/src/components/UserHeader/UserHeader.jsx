import classes from './index.module.css';
import { useNavigate } from 'react-router-dom';

function UserHeader() {
  return (
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
        <a href="">logout</a>
      </nav>
    </div>
  );
}

export default UserHeader;
