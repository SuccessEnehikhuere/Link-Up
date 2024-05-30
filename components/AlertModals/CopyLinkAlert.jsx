import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleShowLink } from '@/Redux/slices/copyLinkAlertSlice';
import { LinkIcon } from '../svgs/Navbar/NavbarSvgs';

const CopyLinkAlert = () => {
  const [timer, setTimer] = useState(2);
  const dispatch = useDispatch();
  const { showLinkAlert } = useSelector((state) => state.alert)

 useEffect(() => {
   setTimeout(() => {
     if (timer === 0) {
       setTimer(2)
       dispatch(toggleShowLink(false));
       return;
     }
     if (showLinkAlert) {
       setTimer((prev) => prev - 1)
     }
   }, 2000)
 }, [timer, showLinkAlert])

  return (
    <section
      className={`fixed bottom-8 z-[10000] left-0 right-0 w-full flex justify-center ${
        showLinkAlert ? 'block showModal ' : 'hidden'
      }`}
    >
      <section className=" flex items-center px-4 py-2 bg-dark-grey w-auto text-primary-bg rounded-lg ">
        <LinkIcon />
        <p className="text-sm ml-2">
          The link has been copied to your clipboard!
        </p>
      </section>
    </section>
  )
}

export default CopyLinkAlert