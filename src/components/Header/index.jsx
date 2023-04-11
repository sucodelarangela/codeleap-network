import styles from './styles.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={`container ${styles.h1}`}>CodeLeap Network</h1>
    </header>
  );
};
