import React from 'react'
import Image from 'next/image'
import ProfileContainer from '@/components/ProfileBackground/ProfileContainer'

const UserProfile = () => {
  return (
    <div className="flex md:shadow-lg px-6 box-border py-4 rounded-xl flex-col justify-between  gap-10 w-full">
      <section className="space-y-2 flex w-full px-4  flex-col items-center">
        <div className="block relative rounded-full h-[100px] w-[100px] bg-profile-bg ">
          <Image
            // src={user?.image}
            alt="profile-image"
            layout="fill"
            className='rounded-full bg-profile-bg'
           
          />
        </div>
        <p className="flex-nowrap flex flex-col justify-center text-dark-grey-color-light text-lg items-center rounded-lg h-4 w-full font-bold truncate px-1 bg-profile-bg"></p>
        <p className="flex flex-col text-primary-color-light text-sm  justify-center items-center rounded-lg h-2 w-20 bg-profile-bg"></p>
      </section>
       <ProfileContainer/>
    </div>
  )
}

export default UserProfile