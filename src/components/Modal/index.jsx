import styles from './Modal.module.css';
import { Button } from '../Form/Button/index';
import { setUser } from '../../redux/User';
import { useDispatch } from 'react-redux';
import { setDelete, setEdit } from '../../redux/Modal';
import { useEffect } from 'react';

export const Modal = ({ type, clickAction }) => {
  // Using dispatch from Redux
  const dispatch = useDispatch();

  // ENTER DIALOG: Saving username on localStorage and React state through FormData
  const handleEnter = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // setUser(formData.get('username'));
    dispatch(setUser(formData.get('username')));
    localStorage.setItem('user', formData.get('username'));
  };

  function handleEscapeKey(event) {
    if (event.code === 'Escape') {
      dispatch(setDelete(false));
      dispatch(setEdit(false));
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, []);

  return (
    <>
      <div className={styles.overlay} onClick={() => {
        dispatch(setDelete(false));
        dispatch(setEdit(false));
      }}></div>
      <div className={styles.modal}>
        {/* Conditionally render a different dialog structure according to user actions */}
        {type === 'delete' ? (
          <>
            <h2 className="title">Are you sure you want to delete this item?</h2>
            <div className={styles.actions}>
              <Button action='cancel' clickAction={clickAction}>Cancel</Button>
              <Button action='delete'>Delete</Button>
            </div>
          </>
        ) : type === 'edit' ? (
          <form>
            <legend className='title'>Edit item</legend>
            <label htmlFor="title" className='label'>Title</label>
            <input id="title" name="title" type="text" placeholder="Hello world" className='input' />
            <label htmlFor="content" className='label'>Content</label>
            <textarea name="content" id="content" placeholder="Content here" className='input'></textarea>
            <div className={styles.actions}>
              <Button action='cancel' clickAction={clickAction}>Cancel</Button>
              <Button type='submit' action='save'>Save</Button>
            </div>
          </form>
        ) : type === 'user' ? (
          <form onSubmit={handleEnter}>
            <legend className='title'>Welcome to CodeLeap network!</legend>
            <label htmlFor="username" className='label'>Please enter your username</label>
            <input id="username" name="username" type="text" placeholder="John Doe" className='input' />
            <Button type='submit' action='submit'>Enter</Button>
          </form>
        ) : ''}
      </div>
    </>
  );
};
