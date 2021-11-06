import Head from 'next/head';
import { FeaturedPosts } from '../sections/index';
import {Categories,PostCard,PostWidget} from '../components';
import {getPosts} from '../services';


// dummy post to check

// const posts = [
//   {title: 'React Testing', excerpt: 'Learn React Testing'},
//   {title: 'React Tailwind', excerpt: 'Learn React Testing with Tailwind'},
// ];



export default function Home({posts}) {
  return (
    <div className="container mx-auto px-10 mb-8">      
      <FeaturedPosts/>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => <PostCard post={post.node} key={post.title}/> )}
        </div> 
          <div className="lg:col-span-4 col-span-1">
            <div className="lg:sticky relative top-8">
              <PostWidget/>
              <Categories/>
            </div>
          </div>
      </div>
    </div>
  )
}


export async function getStaticProps(){
  const posts = (await getPosts()) || [];

  return{
    props:{posts}
  }
}