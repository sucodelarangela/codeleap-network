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
  // state for dealing with pagination
  const currentPage = useSelector(state => state.page);
  // Use state to deal with button disabling verification and for post action
  const [post, setPost] = useState({
    title: '',
    content: ''
  });

  // add new post to the API
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      username,
      title: post.title,
      content: post.content
    };
    dispatch(postPostsAsync(newPost))
      .then(() => {
        dispatch(getPostsAsync(currentPage));
        setPost({ title: '', content: '' });
      });
  };

  // Handle size of textarea when writing long texts
  function handleSize(e) {
    e.style.height = 'auto';
    e.style.height = e.scrollHeight + 'px';
  }

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
            onInput={(e) => handleSize(e.target)}
          ></textarea>
          <Button type='submit' action='submit' disabled={
            post.title === '' || post.content === '' ? true : false
          }>Create</Button>
        </fieldset>
      </form>
    </section>
  );
};
