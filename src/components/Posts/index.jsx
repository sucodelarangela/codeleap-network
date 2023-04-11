import { useEffect, useState } from 'react';
import styles from './Posts.module.css';
import { BiEdit } from 'react-icons/bi';
import { MdDeleteForever } from 'react-icons/md';
import { Modal } from '../Modal';

const posts = {
  results: [
    {
      "id": 4352,
      "username": "Rafael",
      "created_datetime": "2023-04-11T12:41:34.852770Z",
      "title": "sdfdsfdf",
      "content": "asdassad"
    },
    {
      "id": 4351,
      "username": "Rafael",
      "created_datetime": "2023-04-11T12:41:24.460481Z",
      "title": "sdfsf",
      "content": "adsasad"
    },
    {
      "id": 4350,
      "username": "guribeiro",
      "created_datetime": "2023-04-11T12:41:23.378040Z",
      "title": "title",
      "content": "content"
    },
  ]
};

export const Posts = () => {
  const [deleteIsOpen, setDeleteIsOpen] = useState(false);
  const [editIsOpen, setEditIsOpen] = useState(false);

  return (
    <section className={`container ${styles.posts}`}>
      {deleteIsOpen && (
        <Modal type='delete' clickAction={() => setDeleteIsOpen(false)} />
      )}
      {editIsOpen && (
        <Modal type='edit' clickAction={() => setEditIsOpen(false)} />
      )}
      {posts && posts.results.map(post => (
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
