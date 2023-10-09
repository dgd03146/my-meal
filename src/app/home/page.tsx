import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import FollowingBar from '@/components/FollowingBar';
import PostList from '@/components/PostList';

async function HomePage() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    redirect('/auth/signin');
  }

  return (
    <section>
      <FollowingBar />
      <PostList />
    </section>
  );
}

export default HomePage;
