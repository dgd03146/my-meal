'use client';

import React from 'react';
import useSWR from 'swr';
import { GridLoader } from 'react-spinners';
import PostListCard from './PostListCard';
import { SimplePost } from '@/model/post';
import GridSpinner from './ui/GridSpinner';

function PostList() {
  const { data: posts, isLoading: loading } = useSWR<SimplePost[]>('/api/posts');

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
