import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      {/*header*/}
      <Header />

      {/*hero*/}
      <section id="hero">
        <Hero />
      </section>

      {/*about*/}

      {/*experience*/}

      {/*skills*/}

      {/*skills*/}


    </div>
  )
}

export default Home
