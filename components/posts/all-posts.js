import classes from './all-posts.module.css';
import PostsGrid from './posts-grid';

// AllPostPage 컴포넌트에서 데이터 패칭후 props로 넘겨준다.
function AllPosts(props) {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={props.posts} />
    </section>
  );
}

export default AllPosts;
