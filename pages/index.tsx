import Head from 'next/head'
import { Inter } from 'next/font/google'

import styles from '@/styles/Home.module.css'
import Layout from '@/styling/layout'
import LandingPage from '@/components/landingPage'
import { store } from '@/store/store'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Stack over flow copy</title>
      </Head>
      <main className={styles.main}>
        <Layout>
            <LandingPage />      
        </Layout>
      </main>
    </>
  )
}
