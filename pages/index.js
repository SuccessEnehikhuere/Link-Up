import Head from "next/head"
import AuthLayout from "@/components/Layouts/AuthLayout"
import CircleSpinner from "@/components/Loaders/CircleSpinner"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

function Home() {
  const router = useRouter()
  const { status } = useSession()

  if (status === 'loading') {
    return (
      <section className="h-screen bg-primary-bg-light w-full flex justify-center items-center">
        <CircleSpinner />
      </section>
    )
  }

  if (status === 'authenticated') {
    router.push('/dashboard?page=links')
  }

  if (status === 'unauthenticated') {
    router.push('/login')
  }

  return (
    <AuthLayout>
      <Head>
        <title>DevLinks</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </AuthLayout>
  )
}

export default Home;