import AuthLayout from '@/components/Layouts/AuthLayout'
import EmailIcon from '@/components/svgs/Login/EmailIcon'
import LogoHeading from '@/components/svgs/Login/LogoHeading'
import React, { useState } from 'react'
import PasswordIcon from '@/components/svgs/Login/PasswordIcon'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import Head from 'next/head'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '@/Redux/slices/authSlice'
import CircleSpinner from '@/components/Loaders/CircleSpinner'

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {register, watch, handleSubmit, formState:{ errors}} = useForm();

  const { registrationLoading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  
  const handleRegister = async (data)=>{
    dispatch(registerUser(data))
  }

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
            <form onSubmit={handleSubmit(handleRegister)} className="mt-8">
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block text-xs font-normal mb-2 text-dark-grey"
                >
                  Email Address
                </label>
                <div
                  className={`flex border rounded items-center px-2 gap-2 py-2 ${
                    errors?.email
                      ? 'border-red text-red'
                      : 'border-primary-color-light text-dark-grey'
                  } `}
                >
                  <EmailIcon color={errors?.email ? '#FF3939' : '#737373'} />
                  <input
                    disabled={registrationLoading}
                    type="email"
                    id="email"
                    className="w-full focus:outline-none focus:bg-none bg-none"
                    {...register('email', {
                      required: true,
                      message: 'email is required',
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: 'Entered value does not match email format',
                      },
                    })}
                  />
                </div>
              </div>
              {errors?.email && (
                <p className="text-xs text-red">{errors?.email.message}</p>
              )}
              <div className="mb-5">
                <label
                  htmlFor="password"
                  className="block text-xs font-normal mb-2 text-dark-grey"
                >
                  Create Password
                </label>
                <div
                  className={`flex border rounded justify-between items-center px-2 gap-2 py-2 ${
                    errors?.password
                      ? 'border-red text-red'
                      : 'border-primary-color-light text-dark-grey'
                  } `}
                >
                  <div className="flex  items-center  gap-2 ">
                    <PasswordIcon
                      color={errors?.password ? '#FF3939' : '#737373'}
                    />
                    <input
                      disabled={registrationLoading}
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      className="w-full focus:outline-none bg-none"
                      {...register('password', {
                        required: 'password is required',
                        pattern: {
                          value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                          message:
                            'Password must be at least 8 characters long, contain at least 1 number and 1 letter',
                        },
                      })}
                    />
                  </div>
                  {showPassword ? (
                    <FaEye
                      color={errors?.password ? '#FF3939' : '#737373'}
                      onClick={() => setShowPassword(false)}
                      className="cursor-pointer"
                    />
                  ) : (
                    <FaEyeSlash
                      color={errors?.password ? '#FF3939' : '#737373'}
                      onClick={() => setShowPassword(true)}
                      className="cursor-pointer"
                    />
                  )}
                </div>
                {/* ERROR CHECKING  HERE*/}
                <p className="text-xs text-red-500">
                  {errors?.password && errors?.password?.message}
                </p>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="confirmPassword"
                  className="block text-xs font-normal mb-2 text-dark-grey"
                >
                  Confirm Password
                </label>
                <div
                  className={`flex border justify-between rounded items-center px-2 gap-2 py-2  ${
                    errors?.confrimPassword
                      ? 'border-red text-red'
                      : 'border-primary-color-light text-dark-grey'
                  } `}
                >
                  <div className="flex  items-center  gap-2 ">
                    <PasswordIcon
                      color={errors?.confirmPassword ? '#FF3939' : '#737373'}
                    />
                    <input
                      disabled={registrationLoading}
                      type={showConfirmPassword ? 'text' : 'password'}
                      id="confirmPassword"
                      className="w-full focus:outline-none bg-none"
                      {...register('confirmPassword', {
                        required: 'confirm your password',
                        validate: (value) =>
                          value === watch('password') ||
                          'Passwords do not match',
                      })}
                    />
                  </div>
                  {showConfirmPassword ? (
                    <FaEye
                      color={errors?.confirmPassword ? '#FF3939' : '#737373'}
                      onClick={() => setShowConfirmPassword(false)}
                      className="cursor-pointer"
                    />
                  ) : (
                    <FaEyeSlash
                      color={errors?.confirmPassword ? '#FF3939' : '#737373'}
                      onClick={() => setShowConfirmPassword(true)}
                      className="cursor-pointer"
                    />
                  )}
                </div>
                <p className="text-xs text-red-500">
                  {errors?.confirmPassword && errors?.confirmPassword?.message}
                </p>
              </div>
              <button
                disabled={registrationLoading}
                type="submit"
                className="bg-primary-btn-color text-white py-2 px-4 rounded-md hover:bg-primary-btn-color focus:outline-none focus:shadow-outline-blue w-full flex justify-center items-center"
              >
                {registrationLoading ? <CircleSpinner/> : 'Register'}
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

export default Register
