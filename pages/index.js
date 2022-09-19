import Hero from '../components/home-page/hero';
import FeaturedPost from '../components/home-page/featured-posts';

const DUMMY_POSTS = [
  {
    title: 'Getting started with nextjs',
    image: 'getting-started-nextjs.png',
    slug: 'getting-started-with-nextjs',
    excerpt:
      'NextJs is a react framework for production - it makes building full stack react app',
    date: '2022-02-10',
  },
  {
    title: 'Getting started with nextjs-2',
    image: 'getting-started-nextjs-2.png',
    slug: 'getting-started-with-nextjs2',
    excerpt:
      'NextJs is a react framework for production - it makes building full stack react app-2',
    date: '2022-03-22',
  },
  {
    title: 'Getting started with nextjs-3',
    image: 'getting-started-nextjs-3.jpg',
    slug: 'getting-started-with-nextjs3',
    excerpt:
      'NextJs is a react framework for production - it makes building full stack react app-3',
    date: '2022-07-13',
  },
];

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPost posts={DUMMY_POSTS} />
    </>
  );
}

export default HomePage;

// 1) Hero section : 환영 섹션으로 주로 상품을 소개함. 블로그 소개

// 2) Featured Posts : 추천 게시물
