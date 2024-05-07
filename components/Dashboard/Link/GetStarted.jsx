import React from 'react'
import { LinksSvg } from '@/components/svgs/Dashboard/LinksSvg'

const GetStarted = () => {
  return (
    <div className="h-[300px] w-full">
      <section className="bg-[#FAFAFA] flex justify-center flex-col items-center h-full px-4 md:px-8 lg:px-10 xl:px-20 gap-4">
        <LinksSvg />
        <h3 className="font-bold text-2xl text-[#333333]">
          Let's get you started
        </h3>
        <p className="text-center text-[#737373]">
          Use the “Add new link” button to get started. Once you have more than
          one link, you can reorder and edit them. We’re here to help you share
          your profiles with everyone!
        </p>
      </section>
      <section className="flex justify-end w-fulla mt-10 border-t opacity-25 border-[#737373]">
        <button className=" mt-6 w-full justify-center items-center px-6 py-2 rounded-md md:w-[100px]  bg-[#633CFF] opacity-25 text-white ">
          Save
        </button>
      </section>
    </div>
  )
}

export default GetStarted