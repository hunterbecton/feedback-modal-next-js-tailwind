import type { NextPage } from 'next';
import Head from 'next/head';

import { FeedbackModal } from '../components';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>User feedback modal</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <FeedbackModal />
    </>
  );
};

export default Home;
