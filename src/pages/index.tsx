import type { NextPage } from "next"
import Head from "next/head"

import Layout from "@/components/Layout"

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-stone-50 text-stone-950 dark:bg-stone-950 dark:text-stone-50">
      <Head>
        <title>aAIDX</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>hello</Layout>
    </div>
  )
}

export default Home
