import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { fetchUser } from '@/Redux/slices/userSlice';
import { Toaster } from 'react-hot-toast';
import AddLinkModal from '../AlertModals/AddLinkModal';
import CopyLinkAlert from '../AlertModals/CopyLinkAlert';
import ChangesAlert from '../AlertModals/ChangesAlert';

const AppLayout = ({children}) => {
  const dispatch = useDispatch()
  const { data: session } = useSession()
  const { user } = useSelector((state) => state.user)

  useEffect(() => {
    if (session?.user?.email && !user) {
      dispatch(fetchUser())
    }
  }, [session?.user, user])

  return (
    <div>
      <Toaster />
      <AddLinkModal />
      <ChangesAlert />
      <CopyLinkAlert />
      {children}
    </div>
  )
}

export default AppLayout