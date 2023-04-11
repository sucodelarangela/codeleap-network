import styles from './Posts.module.css';
import { useEffect, useState } from 'react';
import { BiEdit } from 'react-icons/bi';
import { MdDeleteForever } from 'react-icons/md';
import { Modal } from '../Modal';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsAsync } from '../../actions/getPostsAction';
import { Pagination } from '@mantine/core';

export const Posts = () => {
  // Username from Redux state
  const user = useSelector(state => state.user);
  // state for dealing with pagination
  const [currentPage, setCurrentPage] = useState(1);
  // states for dealing with dialog's open and close actions
  const [deleteIsOpen, setDeleteIsOpen] = useState(false);
  const [editIsOpen, setEditIsOpen] = useState(false);
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
      {deleteIsOpen && (
        <Modal type='delete' clickAction={() => setDeleteIsOpen(false)} />
      )}
      {editIsOpen && (
        <Modal type='edit' clickAction={() => setEditIsOpen(false)} />
      )}
      {posts && posts.map(post => (
        <div key={post.id} className={styles.card}>
          <div className={styles.card_title}>
            <h2>{post.title}</h2>
            {post.username === user && (
              <div className={styles.card_actions}>
                <MdDeleteForever size={32} onClick={() => setDeleteIsOpen(!deleteIsOpen)} />
                <BiEdit size={32} onClick={() => setEditIsOpen(!editIsOpen)} />
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
