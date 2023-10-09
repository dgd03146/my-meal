'use client';

import React from 'react';
import useSWR from 'swr';

function PostList() {
  const { data: posts, isLoading: loading } = useSWR<SimplePost[]>('/api/post');
  console.log(posts, 'posts');
  return <ul>{posts && posts.map((post) => <li key={post.id}>{post.text}</li>)}</ul>;
}

export default PostList;
