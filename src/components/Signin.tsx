'use client';

import { ClientSafeProvider } from 'next-auth/react';
import { signIn } from 'next-auth/react';
import { Button } from './ui/Button';

type Props = {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
};

const Signin = ({ providers, callbackUrl }: Props) => {
  return (
    <>
      {Object.values(providers).map(({ name, id }) => (
        <Button key={id} text={`Sign In with ${name}`} onClick={() => signIn(id, { callbackUrl })} />
      ))}
    </>
  );
};

export default Signin;
