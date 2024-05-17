import CopyLinkAlert from '@/components/AlertModals/CopyLinkAlert'
import React from 'react'

const useModalHook = () => {
  
  const showCopyModal = () => {
    return <CopyLinkAlert/>
  };
  
  return (
   showCopyModal
  )
}

export default useModalHook