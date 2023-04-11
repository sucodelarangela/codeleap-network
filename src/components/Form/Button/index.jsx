import styles from './Button.module.css';

export const Button = ({ action, children, type }) => {
  return (
    <button type={type} className={`${styles.btn} ${action}`}>
      {children}
    </button>
  );
};
