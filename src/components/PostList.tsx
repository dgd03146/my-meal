'use client';

import React from 'react';
import PostListCard from './PostListCard';
import GridSpinner from './ui/GridSpinner';
import usePosts from '@/hooks/posts';

function PostList() {
  const { posts, isLoading: loading } = usePosts();

  return (
    <section className="h-full">
      {loading && (
        <div className="text-center mt-32">
          <GridSpinner />
        </div>
      )}
      {posts && (
        <ul>
          {posts.map((post, index) => (
            <li key={post.id} className="mb-8">
              <PostListCard post={post} priority={index < 2} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default PostList;
