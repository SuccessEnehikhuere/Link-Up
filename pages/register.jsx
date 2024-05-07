import AuthLayout from '@/components/Layouts/AuthLayout'
import EmailIcon from '@/components/svgs/Login/EmailIcon'
import LogoHeading from '@/components/svgs/Login/LogoHeading'
import React, { useState } from 'react'
import PasswordIcon from '@/components/svgs/Login/PasswordIcon'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import Head from 'next/head'
import Link from 'next/link'

const register = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  return (
    <AuthLayout>
      <Head>
        <title>Register</title>
      </Head>

      <main className=" flex justify-center px-4 items-center min-h-screen text-primary-color-light">
        <section className="w-[420px] space-y-5">
          <LogoHeading
            devwidth="135"
            devheight="26.25"
            logoheight="33.33"
            logowidth="33.33"
          />
          <div className="bg-primary-white md:px-8 px-4 py-4 rounded shadow-md w-full md:w-[420px]">
            <h2 className="text-2xl font-bold mb-1 text-dark-grey">
              Create account
            </h2>
            <p>Let’s get you started sharing your links!</p>
            <form className="mt-8">
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block text-xs font-normal mb-2 text-dark-grey"
                >
                  Email Address
                </label>
                <div className="flex border rounded items-center px-2 gap-2 py-2 border-primary-color-light text-dark-grey-color-light">
                  <EmailIcon />
                  <input
                    type="email"
                    id="email"
                    className="w-full focus:outline-none focus:bg-none bg-none"
                  />
                </div>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="block text-xs font-normal mb-2 text-dark-grey"
                >
                  Create Password
                </label>
                <div className="flex border rounded justify-between items-center px-2 gap-2 py-2 border-primary-color-light text-dark-grey">
                  <div className="flex  items-center  gap-2 ">
                    <PasswordIcon />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      className="w-full focus:outline-none bg-none"
                    />
                  </div>
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
                {/* VALIDATION HERE*/}
                {/* <p className="text-xs text-red-500">
                  {errors?.password && errors?.password?.message}
                </p> */}
              </div>
              <div className="mb-6">
                <label
                  htmlFor="confirmPassword"
                  className="block text-xs font-normal mb-2 text-dark-grey"
                >
                  Confirm Password
                </label>
                <div className="flex border justify-between rounded items-center px-2 gap-2 py-2 border-primary-color-light text-dark-grey">
                  <div className="flex  items-center  gap-2 ">
                    <PasswordIcon />
                    <input
                      id="confirmPassword"
                      className="w-full focus:outline-none bg-none"
                    />
                  </div>
                  {showConfirmPassword ? (
                    <FaEye
                      onClick={() => setShowConfirmPassword(false)}
                      className="cursor-pointer"
                    />
                  ) : (
                    <FaEyeSlash
                      onClick={() => setShowConfirmPassword(true)}
                      className="cursor-pointer"
                    />
                  )}
                </div>
                {/* <p className="text-xs text-red-500">
                  {errors?.confirmPassword && errors?.confirmPassword?.message}
                </p> */}
              </div>
              <button
                type="submit"
                className="bg-primary-btn-color text-white py-2 px-4 rounded-md hover:bg-primary-btn-color focus:outline-none focus:shadow-outline-blue w-full flex justify-center items-center"
              >
                register
              </button>
            </form>
            <p className="mt-6 text-sm text-center flex flex-col md:flex-row items-center gap-1 justify-center">
              Already have an account?{' '}
              <Link
                href="/login"
                className="text-primary-btn-color hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </section>
      </main>
    </AuthLayout>
  )
}

export default register
