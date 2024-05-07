import React from 'react'

const PreviewNavbar = () => {
 return (
   <nav className="flex justify-between h-auto items-center gap-4 bg-primary-white w-full px-4 py-3 rounded-lg">
     <button className="border  border-primary-btn-color font-[600] rounded-md py-1 md:py-2 text-primary-btn-color bg-primary-white   flex items-center justify-center w-auto md:w-[130px] px-2.5 md:px-4 text-sm">
       Back to Editor
     </button>
     <button className="border border-primary-btn-color font-[600] rounded-md py-1 md:py-2 bg-primary-btn-color  text-primary-white flex items-center justify-center w-auto md:w-[130px] px-2 text-sm">
       Update Links
     </button>
   </nav>
 )
}

export default PreviewNavbar