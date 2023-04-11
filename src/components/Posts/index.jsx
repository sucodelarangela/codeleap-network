import { useEffect, useState } from 'react';
import styles from './Posts.module.css';
import { BiEdit } from 'react-icons/bi';
import { MdDeleteForever } from 'react-icons/md';
import { Modal } from '../Modal';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsAsync } from '../../actions/getPostsAction';

export const Posts = () => {
  const [deleteIsOpen, setDeleteIsOpen] = useState(false);
  const [editIsOpen, setEditIsOpen] = useState(false);
  const posts = useSelector(state => state.posts.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsAsync());
  }, [dispatch]);

  return (
    <section className={`container ${styles.posts}`}>
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
            {post.username === 'Rafael' && (
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
