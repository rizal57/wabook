import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  AsideLeft,
  AsideRight,
  BoxInput,
  BoxStatus,
  BoxStatusSkeleton,
  Stories
} from '../components';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      setLoading(false);
      setPosts(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <Helmet>
        <title>Wabook</title>
      </Helmet>
      <div className="min-h-screen bg-gray-100 px-2">
        <div className="grid grid-cols-4 pt-[56px] top-0 w-full">
          {/* Aside Left */}
          <AsideLeft />
          {/* Center */}
          <div className="col-span-2 pt-8 px-16 w-full mx-auto">
            <div className="max-w-lg">
              {/* stories */}
              <Stories />
              {/* input status */}
              <BoxInput />

              {posts.map((post) =>
                loading ? (
                  <BoxStatusSkeleton key={post.id} />
                ) : (
                  <BoxStatus
                    key={post.id}
                    userId={post.userId}
                    body={post.body}
                  />
                )
              )}
            </div>
          </div>
          {/* Aside Right */}
          <AsideRight />
        </div>
      </div>
    </>
  );
};

export default Home;
