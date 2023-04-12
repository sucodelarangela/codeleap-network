import styles from './Posts.module.css';
import { useEffect, useState } from 'react';
import { BiEdit } from 'react-icons/bi';
import { MdDeleteForever } from 'react-icons/md';
import { TbReload } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsAsync } from '../../actions/getPostsAction';
import { Pagination } from '@mantine/core';
import { setDelete, setEdit, setId, setTitle, setContent } from '../../redux/Modal';
import { timeSince } from '../../utils/timeSince';
import { setPage } from '../../redux/Pagination';
import { Button } from '../Form/Button';

export const Posts = () => {
  // Username from Redux state
  const user = useSelector(state => state.user);
  // state for dealing with pagination
  const page = useSelector(state => state.page);
  const [currentPage, setCurrentPage] = useState(page);
  // Selectors from Redux states
  const posts = useSelector(state => state.posts.data);
  const count = useSelector(state => state.posts.count);
  const dispatch = useDispatch();

  console.log(page, currentPage);

  // Reload posts every time page or dispatch changes
  useEffect(() => {
    dispatch(getPostsAsync(currentPage));
    dispatch(setPage(currentPage));
    window.scrollTo(0, 0);
  }, [dispatch, currentPage]);

  // Opening delete dialog and saving the post id with Redux
  const handleDeleteData = (id) => {
    dispatch(setDelete(true));
    dispatch(setId(id));
  };

  // Opening edit dialog and saving post info with Redux
  const handleEditData = (post) => {
    dispatch(setEdit(true));
    dispatch(setId(post.id));
    dispatch(setTitle(post.title));
    dispatch(setContent(post.content));
  };

  return (
    <section className={`container ${styles.posts}`}>
      <Button type='button' action='submit' clickAction={() => setCurrentPage(1)}><TbReload size={32} />Reload feed</Button>
      {posts && posts.map(post => (
        <div key={post.id} className={styles.card}>
          <div className={styles.card_title}>
            <h2>{post.title}</h2>
            {post.username === user && (
              <div className={styles.card_actions}>
                <MdDeleteForever size={32} onClick={() => handleDeleteData(post.id)} />
                <BiEdit size={32} onClick={() => handleEditData(post)} />
              </div>
            )}
          </div>
          <div className={styles.user}>
            <span>@{post.username}</span>
            <span>{timeSince(new Date(post.created_datetime))}</span>
          </div>
          <p>{post.content}</p>
        </div>
      ))}
      <Pagination
        color='dark'
        value={currentPage}
        page={currentPage}
        onChange={setCurrentPage}
        className={styles.pagination}
        total={Math.ceil(count / 10)}
        withControls={false}
      />
    </section>
  );
};
