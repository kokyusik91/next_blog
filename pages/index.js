import Hero from '../components/home-page/hero';
import FeaturedPost from '../components/home-page/featured-posts';
import { getFeaturedPosts } from '../lib/posts-util';

import Head from 'next/head';

function HomePage(props) {
  return (
    <>
      <Head>
        <title>Ko' Blog</title>
        <meta
          name="description"
          content="I post about programming and web dev"
        />
      </Head>
      <Hero />
      <FeaturedPost posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;

// 1) Hero section : 환영 섹션으로 주로 상품을 소개함. 블로그 소개

// 2) Featured Posts : 추천 게시물
