import styles from './Modal.module.css';
import { Button } from '../Form/Button/index';
import { setUser } from '../../redux/User';
import { useDispatch, useSelector } from 'react-redux';
import { setId, setDelete, setEdit, setTitle, setContent } from '../../redux/Modal';
import { useEffect } from 'react';
import { deletePostAsync } from '../../actions/deletePostAction';
import { getPostsAsync } from '../../actions/getPostsAction';
import { patchPostAsync } from '../../actions/patchPostAction';

export const Modal = ({ type }) => {
  // Using dispatch from Redux
  const dispatch = useDispatch();
  const postId = useSelector(state => state.modal.id);
  const postTitle = useSelector(state => state.modal.title);
  const postContent = useSelector(state => state.modal.content);

  // ENTER DIALOG: Saving username on localStorage and React state through FormData
  const handleEnter = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // setUser(formData.get('username'));
    dispatch(setUser(formData.get('username')));
    localStorage.setItem('user', formData.get('username'));
  };

  // Close dialog with ESC key
  function handleEscapeKey(event) {
    if (event.code === 'Escape') {
      dispatch(setId(0));
      dispatch(setDelete(false));
      dispatch(setEdit(false));
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, []);

  // deleting a post
  const handleDelete = () => {
    dispatch(deletePostAsync(postId))
      .then(() => {
        dispatch(getPostsAsync(1));
        dispatch(setDelete(false));
      });
  };

  // updating a post
  const handleUpdate = (e) => {
    e.preventDefault();

    const post = {
      id: postId,
      title: postTitle,
      content: postContent
    };

    dispatch(patchPostAsync(post))
      .then(() => {
        dispatch(getPostsAsync(1));
        dispatch(setEdit(false));
      });
  };

  return (
    <>
      <div className={styles.overlay} onClick={() => {
        dispatch(setId(0));
        dispatch(setDelete(false));
        dispatch(setEdit(false));
      }}></div>
      <div className={styles.modal}>
        {/* Conditionally render a different dialog structure according to user actions */}
        {type === 'delete' ? (
          <>
            <h2 className="title">Are you sure you want to delete this item?</h2>
            <div className={styles.actions}>
              <Button action='cancel' clickAction={() => dispatch(setDelete(false))}>Cancel</Button>
              <Button action='delete' clickAction={handleDelete}>Delete</Button>
            </div>
          </>
        ) : type === 'edit' ? (
          <form onSubmit={handleUpdate}>
            <legend className='title'>Edit item</legend>
            <label htmlFor="title" className='label'>Title</label>
            <input id="title" name="title" type="text" value={postTitle} onChange={(e) => dispatch(setTitle(e.target.value))} className='input' />
            <label htmlFor="content" className='label'>Content</label>
            <textarea name="content" id="content" value={postContent} onChange={(e) => dispatch(setContent(e.target.value))} className='input'></textarea>
            <div className={styles.actions}>
              <Button type='button' action='cancel' clickAction={() => dispatch(setEdit(false))}>Cancel</Button>
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
