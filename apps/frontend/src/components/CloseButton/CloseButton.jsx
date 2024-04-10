import classes from './index.module.css';

export default function closeButton() {
  const handleClick = () => {
    window.location.href = '/';
  };

  return (
    <button className={classes.closeButton} onClick={handleClick}>
      x
    </button>
  );
}
