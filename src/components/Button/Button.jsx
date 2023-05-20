import styles from './Button.module.css';

function Button({ type, text, handleClick }) {
  return (
    <button type={type} className={styles.button} onClick={handleClick}>
      {text}
    </button>
  );
}

export default Button;
