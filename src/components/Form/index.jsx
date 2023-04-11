import { Button } from './Button';
import styles from './Form.module.css';

export const Form = () => {
  return (
    <section className="container">
      <form className={styles.legend}>
        <fieldset>
          <legend className='title'>What's on your mind?</legend>
          <label htmlFor="title" className='label'>Title</label>
          <input id="title" name="title" type="text" placeholder="Hello world" className='input' />
          <label htmlFor="content" className='label'>Content</label>
          <textarea name="content" id="content" placeholder="Content here" className='input'></textarea>
          <Button type='submit' action='submit'>Create</Button>
        </fieldset>
      </form>
    </section>
  );
};
