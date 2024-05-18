import React, { useState } from 'react'
import Image from 'next/image'
import ProfileContainer from '../Dashboard/ProfileBackground/ProfileContainer'
import { useSelector } from 'react-redux'

const UserProfile = () => {
  const [loadingImage, setLoadingImage] = useState(true);
  const {user, userLoading} = useSelector((state)=>state.user);
  
  //construct user's fullname 
  const fullName = `${user?.firstName ? user?.firstName : ''} ${user?.lastName ? user?.lastName : ''}`;

  return (
    <div className="flex md:shadow-lg px-6 box-border py-4 rounded-xl flex-col justify-between  gap-10 w-full">
      <section className="space-y-2 flex w-full px-4  flex-col items-center">
        <div
          className={`block relative rounded-full h-[100px] w-[100px]  ${
            !user?.image && 'bg-profile-bg '
          } ${userLoading && 'shimmer'}`}
        >
          {user?.image && (
            <Image
              src={user?.image}
              alt="profile-image"
              layout="fill"
              className={`rounded-full ${loadingImage ? 'shimmer' : ''}`}
              onLoadingComplete={() => setLoadingImage(false)}
            />
          )}
        </div>

        <p
          className={`flex-nowrap flex flex-col justify-center text-dark-grey text-lg items-center rounded-lg h-4 w-full font-bold truncate px-1 ${
            !user?.firstName && 'bg-profile-bg'
          }  ${userLoading && 'shimmer'}`}
        >
          {' '}
          {fullName}
        </p>
        <p
          className={`flex flex-col text-primary-color-light text-sm  justify-center items-center rounded-lg h-2 w-20 ${
            !user?.email && 'bg-profile-bg'
          }${userLoading && 'shimmer'} `}
        >
          {' '}
          {user?.email && user?.email}
        </p>
      </section>
      <ProfileContainer />
    </div>
  )
}

export default UserProfile