import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// path모듈에서 join 메서드를 이용해서 절대 경로를 생성할 수 있다.
// 절대 경로에서 'posts' 폴더를 읽도록 하겠다.
// /Users/kyusikko/Downloads/nextjs blog project/posts
const postsDirectory = path.join(process.cwd(), 'posts');

export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}

// 인자로 받는 값이 .md가 붙은 파일이던, 그냥 .md가 붙지 않은 파일이건 동일하게 동작한다.
export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, ''); // 파일 확장자 삭제
  // /Users/kyusikko/Downloads/nextjs blog project/posts/getting-started-with-nextjs.md
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  // readFileSync : 파일의 콘텐츠를 읽어 들이는 메서드
  // fileContent = 진짜 Readme 파일 그대로 문자열로 출력됨
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  // 두개의 프로퍼티를 갖는 하나의 객체를 반환한다. (메타 데이터가 포함된 data 프로퍼티,  실제 콘텐츠가 있는 content 프로퍼티) - notion 참고
  const { data, content } = matter(fileContent);
  // getting-started-with-nextjs

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  // readdirSync는 모든 콘텐츠를 동기식으로 읽는다.
  // 디렉토리의 전체 콘텐츠를 한 번에 읽어 들이도록 합니다.
  // posts 폴더의 파일명이 배열로 반환 : postFiles [ 'getting-started-with-nextjs.md' ]
  const postFiles = getPostsFiles();
  // allPosts = [{...postData}, {...postData}, {...postData}];
  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });
  // date에 따라서 sorting 하기
  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1,
  );

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
