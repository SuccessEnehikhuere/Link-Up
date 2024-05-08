import React from 'react'
import ProfileContainer from './ProfileContainer'
import Image from 'next/image'

const ProfileContent = () => {
 return (
   <div className="absolute top-0 left-0 right-0 bg-primary-white z-50 flex justify-center items-center h-full w-full ">
     <div className="flex px-6 flex-col justify-between  gap-12 w-full">
       <section className="space-y-4 flex w-full px-4  flex-col items-center">
         <div
           className='block relative rounded-full h-[100px] w-[100px]  bg-profile-bg '
           
         >
          
             <Image
              //  src={user?.image}
               alt="profile-image"
               layout="fill"
               className='rounded-full'
              //  onLoadingComplete={() => setLoadingImage(false)}
             />
       
         </div>
         <p
           className='flex-nowrap truncate flex flex-col justify-center text-dark-grey-color-light text-lg items-start rounded-lg h-4 px-1 w-full font-bold bg-profile-bg'
         >
           
         </p>
         <p
           className='flex flex-col text-primary-text-color-light text-sm  justify-center items-center rounded-lg h-2 w-20 '
         >
        
         </p>
       </section>
       <ProfileContainer/>
     </div>
   </div>
 )
}

export default ProfileContent