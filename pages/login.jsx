import React, { useState } from 'react'
import Head from 'next/head'
import LogoHeading from '@/components/svgs/Login/LogoHeading'
import AuthLayout from '@/components/Layouts/AuthLayout'
import EmailIcon from '@/components/svgs/Login/EmailIcon'
import PasswordIcon from '@/components/svgs/Login/PasswordIcon'
import { FaEyeSlash, FaEye } from 'react-icons/fa'
import Link from 'next/link'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <AuthLayout>
      <Head>
        <title>Login</title>
      </Head>
      <main className="flex justify-center px-4 items-center min-h-screen text-primary-color-light ">
        <section className="w-[420px] space-y-7">
          <LogoHeading
            devwidth="135"
            devheight="26.25"
            logoheight="33.33"
            logowidth="33.33"
          />
          <div className="bg-primary-white p-4 md:p-8 rounded shadow-md w-full md:w-[420px]">
            <h2 className="text-2xl font-bold mb-1 text-dark-grey">Login</h2>
            <p>Add your details below to get back into the app</p>
            <form className="mt-6">
              <div className="mb-5 text-dark-grey ">
                <label
                  htmlFor="email"
                  className="block text-xs font-normal mb-2"
                >
                  Email Address
                </label>
                <div className="flex border rounded items-center  px-2 gap-2 py-2">
                  <EmailIcon />
                  <input
                    type="email"
                    id="email"
                    className="w-full  focus:outline-none focus:bg-none bg-none"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block  text-xs font-normal mb-2 text-dark-grey"
                >
                  Password
                </label>

                <div className="flex border items-center text-dark-grey rounded justify-between  px-2 gap-2 py-2">
                  <div className="flex  items-center   gap-2 w-full">
                    <PasswordIcon />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      className="w-full focus:outline-none none bg-none"
                    />
                    {showPassword ? (
                      <FaEye
                        onClick={() => setShowPassword(false)}
                        className="cursor-pointer"
                      />
                    ) : (
                      <FaEyeSlash
                        onClick={() => setShowPassword(true)}
                        className="cursor-pointer"
                      />
                    )}
                  </div>
                  {/*VALIDATE ERROR HERE*/}
                </div>
              </div>
              <button
                type="submit"
                className="bg-primary-btn-color text-white py-2 px-4 rounded-md hover:bg-primary-btn-color focus:outline-none w-full flex justify-center items-center"
              >
                log in
              </button>
            </form>
            <p className="mt-6 text-sm flex items-center flex-col md:flex-row gap-1 justify-center text-center">
              Don&apos;t have an account?{' '}
              <Link
                href="/register"
                className="text-primary-btn-color hover:underline"
              >
                Create account
              </Link>
            </p>
          </div>
        </section>
      </main>
    </AuthLayout>
  )
}

export default Login
