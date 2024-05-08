import React from 'react'
import { LinksSvg } from '@/components/svgs/Dashboard/LinksSvg'

const GetStarted = () => {
  return (
    <div className="h-[300px] w-full bg-primary-bg">
      <section className="flex justify-center items-center flex-col px-4 md:px-8 lg:px-10 xl:px-20 gap-4 h-full">
        <LinksSvg />
        <h3 className="font-bold text-2xl text-dark-grey">
          Let's get you started
        </h3>
        <p className="text-center text-primary-color-light">
          Use the “Add new link” button to get started. Once you have more than
          one link, you can reorder and edit them. We’re here to help you share
          your profiles with everyone!
        </p>
      </section>
    </div>
  )
}

export default GetStarted