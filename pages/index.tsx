import type { NextPage } from "next";
import Head from "next/head";
import Blend from './blend';
import { useState } from "react";

const Home: NextPage = () => {
  const [page, setPage] = useState('home');
  return (
   <>
     <Head>
      <title>Levi Noppers Portfolio</title>
     </Head>
    <Blend/>
     
   </>
  );
};

export default Home;
