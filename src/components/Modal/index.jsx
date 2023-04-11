import styles from './Modal.module.css';
import { Button } from '../Form/Button/index';

export const Modal = ({ type, clickAction }) => {

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
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
        ) : ''}
      </div>
    </div>
  );
};
