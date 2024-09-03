import type { NextPage } from "next";
import Head from "next/head";
import Blend from './blend';
import { useState } from "react";
import { useMediaQuery } from 'react-responsive'



const Home: NextPage = () => {
  const [page, setPage] = useState('home');
  const isTabletorMobile = useMediaQuery({query: '(max-width: 600px)'})

  return (
   <>
     <Head>
      <title>Levi Noppers Portfolio</title>
     </Head>
 {!isTabletorMobile ? <Blend/> : <h1>Please visit this website on desktop</h1>}
    
     
   </>
  );
};

export default Home;
