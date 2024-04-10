import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import classes from './index.module.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchButtonClick = (event) => {
    event.preventDefault();
    if (searchValue) {
      navigate(`/?search=${searchValue}`);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearchButtonClick(event);
    }
  };

  return (
    <>
      <header>
        <h1
          className={classes.headline}
          onClick={() => {
            navigate(`/`);
          }}
        >
          Web Shop
        </h1>
        <nav>
          <input
            className={classes.navbarSearchInput}
            type="text"
            placeholder="Search products..."
            value={searchValue}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          />
          <button
            className={classes.navbarSearchButton}
            onClick={handleSearchButtonClick}
          >
            Search
          </button>
          <span
            className={classes.accountCircleIcon}
            onClick={() => {
              navigate(`/orders`);
            }}
          >
            <AccountCircleIcon />
          </span>
        </nav>
      </header>
    </>
  );
};

export default Header;
