'use client';

import React from 'react';
import useSWR from 'swr';
import { GridLoader } from 'react-spinners';
import PostListCard from './PostListCard';
import { SimplePost } from '@/model/post';

function PostList() {
  const { data: posts, isLoading: loading } = useSWR<SimplePost[]>('/api/post');

  return (
    <section className="h-full">
      {loading && (
        <div className="text-center mt-32">
          <GridLoader color="#121063" />
        </div>
      )}
      {posts && (
        <ul>
          {posts.map((post) => (
            <li key={post.id} className="mb-8">
              <PostListCard post={post} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default PostList;
