import { useDispatch, useSelector } from 'react-redux';
import { Button } from './Button';
import styles from './Form.module.css';
import { useState } from 'react';
import { postPostsAsync } from '../../actions/postPostAction';
import { getPostsAsync } from '../../actions/getPostsAction';

export const Form = () => {
  // Using dispatch from Redux
  const dispatch = useDispatch();
  // Get username from Redux
  const username = useSelector(state => state.user);
  // Use state to deal with button disabling verification and for post action
  const [post, setPost] = useState({
    title: '',
    content: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      username,
      title: post.title,
      content: post.content
    };
    console.log(newPost);
    dispatch(postPostsAsync(newPost));
    dispatch(getPostsAsync(1));
  };

  return (
    <section className="container">
      <form onSubmit={handleSubmit} className={styles.legend}>
        <fieldset>
          <legend className='title'>What's on your mind?</legend>
          <label htmlFor="title" className='label'>Title</label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Hello world"
            className='input'
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
          />
          <label htmlFor="content" className='label'>Content</label>
          <textarea
            name="content"
            id="content"
            placeholder="Content here"
            className='input'
            value={post.content}
            onChange={(e) => { setPost({ ...post, content: e.target.value }); }}
          ></textarea>
          <Button type='submit' action='submit' disabled={
            post.title === '' || post.content === '' ? true : false
          }>Create</Button>
        </fieldset>
      </form>
    </section>
  );
};
