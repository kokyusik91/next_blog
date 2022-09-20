import PostContent from '../../components/posts/post-detail/post-content';
import { getPostData, getPostsFiles } from '../../lib/posts-util';

function PostDetailPage(props) {
  return <PostContent post={props.post} />;
}

export function getStaticProps(context) {
  // params를 통해 구체적인 slug 값을 추출할 수 있다.
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    // 600초 마다 재배포 === 10분마다 한번씩 최신 데이터를 가지고 온다.
    revalidate: 600,
  };
}

// 미리 생성해야하는 페이지들의 경로를 가지는 객체 즉 구체적인 slug값을 갖는다.
export function getStaticPaths() {
  // 어떤 파일 경로가 있는지 가져온다.
  const postFilenames = getPostsFiles();
  // 파일 경로를 가져와서 뒤에 md 확장자를 띄어서 배열로 만든다.
  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''));
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default PostDetailPage;
