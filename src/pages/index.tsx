import Head from 'next/head'

import Header from '../components/Header'
import Hero from '../components/Hero'

import { Wapper } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Homepage | Dreamers Client.</title>
      </Head>
      <Wapper>
        <Header />
        <Hero />
      </Wapper>
    </>
  )
}

export default Home
