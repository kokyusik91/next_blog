import PostHeader from './post-header';
import classes from './post-content.module.css';
import ReactMarkdown from 'react-markdown';

function PostContent(props) {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      {/* 실제 마크다운 코드가 JSX로 변환되어 들어온다 */}
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
