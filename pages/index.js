import Head from 'next/head'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Result from '../components/Result'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* Header  */}
      <Header />
      {/* Header  */}
      <Navbar />
      {/* Header  */}
      <Result />
    </div>
  )
}
