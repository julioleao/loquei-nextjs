import React from 'react';
import Head from 'next/head';
import { signIn, signOut, useSession } from 'next-auth/client';

import { connectToDatabase } from '../utils/database';
import { connect, jsonify } from '../utils/database';
import Post from '../models/post';

export async function getServerSideProps(context) {
  connect();

  const posts = await Post.find({}).exec();

  //const users = JSON.parse(JSON.stringify(data));

  return {
    props: { posts: jsonify(posts) }
  };

}

export default function Home({ posts }) {
  const [session, loading] = useSession();
  return (

    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div>
        {!session && <div>
          Not signed in <br />
          <button onClick={() => signIn('auth0')}>Sign in</button>
        </div>}
        {session && <div>
          Signed in as {session.user.name} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </div>}
      </div>
    </div>
  );
}
