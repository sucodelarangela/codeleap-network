import styles from './Posts.module.css';
import { useEffect, useState } from 'react';
import { BiEdit } from 'react-icons/bi';
import { MdDeleteForever } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsAsync } from '../../actions/getPostsAction';
import { Pagination } from '@mantine/core';
import { setDelete, setEdit } from '../../redux/Modal';

export const Posts = () => {
  // Username from Redux state
  const user = useSelector(state => state.user);
  // state for dealing with pagination
  const [currentPage, setCurrentPage] = useState(1);
  // Selectors from Redux states
  const posts = useSelector(state => state.posts.data);
  const count = useSelector(state => state.posts.count);
  const dispatch = useDispatch();

  // Reload posts every time page or dispatch changes
  useEffect(() => {
    dispatch(getPostsAsync(currentPage));
  }, [dispatch, currentPage]);

  return (
    <section className={`container ${styles.posts}`}>
      <Pagination
        color='dark'
        page={currentPage}
        onChange={setCurrentPage}
        className={styles.pagination}
        total={count / 10}
      />
      {posts && posts.map(post => (
        <div key={post.id} className={styles.card}>
          <div className={styles.card_title}>
            <h2>{post.title}</h2>
            {post.username === user && (
              <div className={styles.card_actions}>
                <MdDeleteForever size={32} onClick={() => dispatch(setDelete(true))} />
                <BiEdit size={32} onClick={() => dispatch(setEdit(true))} />
              </div>
            )}
          </div>
          <div className={styles.user}>
            <span>@{post.username}</span>
            <span>{post.created_datetime.slice(0, 10)}</span>
          </div>
          <p>{post.content}</p>
        </div>
      ))}
    </section>
  );
};
