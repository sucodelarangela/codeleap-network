import styles from './Button.module.css';

export const Button = ({ action, clickAction, children, type, disabled }) => {
  return (
    <button
      type={type}
      className={`${styles.btn} ${styles[action]}`}
      onClick={clickAction}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
