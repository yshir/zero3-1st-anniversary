import React from 'react';
import { NextPage } from 'next';
import { Home } from '../components/Home';
import Head from 'next/head';

const IndexPage: NextPage = () => (
  <>
    <Head>
      <title>0:00 1st Anniversary</title>
    </Head>
    <Home />
  </>
);

export default IndexPage;
