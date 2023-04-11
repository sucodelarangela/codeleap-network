import { useSelector } from 'react-redux';
import styles from './styles.module.css';

export const Header = () => {
  const user = useSelector(state => state.user);

  return (
    <header className={styles.header}>
      <div className='container'>
        <h1>CodeLeap Network</h1>
        <h4>Welcome, {user}</h4>
      </div>
    </header>
  );
};
