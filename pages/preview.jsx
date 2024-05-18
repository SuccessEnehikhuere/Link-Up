import Head from 'next/head'
import React from 'react'
import PreviewNavbar from '@/components/Navbar/PreviewNavbar'
import UserProfile from '@/components/Preview/UserProfile'

const Preview = () => {
  return (
    <>
      <Head>
        <title>Preview</title>
      </Head>
      <section className="relative md:py-4 h-[35vh] md:bg-primary-btn-color max-w-screen w-full md:rounded-b-[2rem] box-border">
        <div className='md:px-4'>
          <PreviewNavbar />
        </div>

        <section className="w-full flex md:absolute md:top-1/2  justify-center ">
          <section className="w-[300px] mt-10 md:mt-4 rounded-lg bg-primary-white ">
            <UserProfile />
          </section>
        </section>
      </section>
    </>
  )
}

export default Preview
