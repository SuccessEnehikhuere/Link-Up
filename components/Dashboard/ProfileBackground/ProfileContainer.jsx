import React, {useEffect} from 'react'
import useDashboardHook from '../hooks/useDashboardHook'
import SingleLink from './SingleLink'
import { useSelector } from 'react-redux'

const ProfileContainer = () => {
  const { allLinks, fetchLinksLoading } = useSelector((state) => state.helper)
  const { userLoading, user } = useSelector((state) => state.user)
  const { fetchLinks } = useDashboardHook();

  // an effect to fetch the users social link when there is a user or the user changes
  useEffect(() => {
    if (user?.id) {
      fetchLinks();
    }
  }, [user, fetchLinks]);


 return (
   <ul className="w-full space-y-2 h-[250px] overflow-auto">
     <>
       {allLinks.length > 0 ? (
         <>
           {allLinks.map((link, index) => (
             <SingleLink key={index} link={link} />
           ))}
           <>
             {allLinks.length < 5 &&
               Array.from({ length: 5 - allLinks.length }).map((_, index) => (
                 <li
                   key={index}
                   className={`bg-primary-bg py-2 px-2 text-primary-white font-semibold rounded-lg h-10 w-full border`}
                 ></li>
               ))}
           </>
         </>
       ) : (
         <>
           {Array.from({ length: 5 }).map((_, index) => (
             <li
               key={index}
               className={`bg-primary-bg ${
                 (fetchLinksLoading || userLoading) && 'shimmer'
               } py-2 px-2 text-primary-white font-semibold rounded-lg h-10 w-full border cursor-copy`}
             ></li>
           ))}
         </>
       )}
     </>
   </ul>
 )
}

export default ProfileContainer
