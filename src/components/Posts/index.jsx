import styles from './Posts.module.css';

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
  ]
};

export const Posts = () => {
  return (
    <section className={`container ${styles.posts}`}>
      {posts && posts.results.map(post => (
        <div key={post.id} className={styles.card}>
          <h2>{post.title}</h2>
          <div>
            <span>@{post.username}</span>
            <span>{post.created_datetime.slice(0, 10)}</span>
          </div>
          <p>{post.content}</p>
        </div>
      ))}
    </section>
  );
};
