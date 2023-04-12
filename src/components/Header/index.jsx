import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.css';
import { setUser } from '../../redux/User';

export const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  // Handle logout
  const logout = () => {
    dispatch(setUser(''));
    localStorage.clear();
  };

  return (
    <header className={styles.header}>
      <div className='container'>
        <h1>CodeLeap Network</h1>
        <div>
          <h4>Welcome, {user}</h4>
          <button onClick={logout}>
            <h5>Not you? Click to log out.</h5>
          </button>
        </div>
      </div>
    </header>
  );
};
