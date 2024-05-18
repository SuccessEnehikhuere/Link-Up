import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { toggleUpdateLink } from '@/Redux/slices/helperSlice'

const PreviewNavbar = () => {
  const { updatingLink } = useSelector((state) => state.helper);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleUpdate = () => {
    dispatch(toggleUpdateLink(true));
  }

  const handleSave = () => {
    dispatch(toggleUpdateLink(false));
  }

 return (
   <nav className="flex justify-between h-auto items-center gap-4 bg-primary-white w-full px-4 py-3 rounded-lg">
     <button
       onClick={() => router.back()}
       className="border  border-primary-btn-color font-[600] rounded-md py-1 md:py-2 text-primary-btn-color bg-primary-white   flex items-center justify-center w-auto md:w-[130px] px-2.5 md:px-4 text-sm"
     >
       Back to Editor
     </button>
     {updatingLink ? (
       <button
         onClick={handleSave}
         className="border border-primary-btn-color font-[600] rounded-md py-1 md:py-2 bg-primary-btn-color  text-primary-white flex items-center justify-center w-auto md:w-[130px] px-2 text-sm"
       >
         Save Changes
       </button>
     ) : (
       <button
         onClick={handleUpdate}
         className="border border-primary-btn-color font-[600] rounded-md py-1 md:py-2 bg-primary-btn-color text-primary-white flex items-center justify-center w-auto md:w-[120px] px-2.5 md:px-4 text-sm"
       >
         Update Links
       </button>
     )}
   </nav>
 )
}

export default PreviewNavbar