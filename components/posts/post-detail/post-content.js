import PostHeader from './post-header';
import classes from './post-content.module.css';
import ReactMarkdown from 'react-markdown';

const DUMMY_POST = {
  title: 'Getting started with nextjs',
  image: 'getting-started-nextjs.png',
  slug: 'getting-started-with-nextjs',
  date: '2022-02-10',
  content: '# This is a first Post ☺️',
};

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      {/* 실제 마크다운 코드가 JSX로 변환되어 들어온다 */}
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
