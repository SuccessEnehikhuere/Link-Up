import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'
import { toggleAddLinkModal } from '@/Redux/slices/helperSlice'
import ChangesIcon from './svgs/ChangesIcon'


const AddLinkModal = () => {
  	const dispatch = useDispatch()
    const { showAddLinkModal, saveLinksMessage } = useSelector(
      (state) => state.helper
    )
    const [timer, setTimer] = useState(3);

    useEffect(() => {
      setTimeout(() => {
        if (timer === 0) {
          setTimer(2)
          dispatch(toggleAddLinkModal(false))
          return;
        }
        if (showAddLinkModal) {
          setTimer((prev) => prev - 1)
        }
      }, 2000)
    }, [timer, showAddLinkModal]);

  return (
    <section
      className={`fixed bottom-8 z-[10000] left-0 right-0 w-full flex justify-center ${
        showAddLinkModal ? 'block showModal ' : 'hidden'
      }`}
    >
      <section className="flex items-center px-4 py-2 bg-dark-grey w-auto text-primary-bg rounded-lg ">
        <ChangesIcon />
        <p className=" text-sm ml-2">{saveLinksMessage}</p>
      </section>
    </section>
  )
}

export default AddLinkModal