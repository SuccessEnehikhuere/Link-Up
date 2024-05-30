import React from 'react'
import ProfileContainer from './ProfileContainer'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import Image from 'next/image'


const ProfileContent = () => {
  const { user, userLoading } = useSelector((state) => state.user);
 const [loadingImage, setLoadingImage] = useState(true);
  // construct the fullname from the user firstname and lastname
  const fullName = `${user?.firstName ? user?.firstName : ''} ${
    user?.lastName ? user?.lastName : ''
  }`

 return (
   <div className="absolute top-0 left-0 right-0 bg-primary-white z-50 flex justify-center items-center h-full w-full ">
     <div className="flex px-6 flex-col justify-between  gap-12 w-full">
       <section className="space-y-4 flex w-full px-4  flex-col items-center">
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
           className={`flex-nowrap truncate flex flex-col justify-center text-dark-grey text-lg items-start rounded-lg h-4 px-1 w-full font-bold ${
             !user?.firstName && 'bg-profile-bg'
           }  ${userLoading && 'shimmer'}`}
         >
           {fullName}
         </p>

         <p
           className={`flex flex-col text-primary-color-light text-sm  justify-center items-center rounded-lg h-2 w-20 ${
             !user?.email && 'bg-profile-bg'
           }  ${userLoading && 'shimmer'}`}
         >
           {user?.email && user?.email}
         </p>
       </section>
       <ProfileContainer />
     </div>
   </div>
 )
}

export default ProfileContent