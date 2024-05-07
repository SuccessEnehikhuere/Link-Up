import React from 'react'
import AddLinks from './AddLinks'
import GetStarted from './GetStarted'
import useDashboardHook from '../hooks/useDashboardHook'
import SaveSpinner from '../../LoadingSpinners/SaveSpinner'

const LinksPage = () => {
  // const {
  //   saveLinksLoading,
  //   handleAddNewLink,
  //   activateSaveBtn,
  //   newLinks,
  //   handleSaveLinks,
  // } = useDashboardHook()


  return (
    <section className="col-span-7 lg:col-span-4 bg-primary-white-light rounded-md p-6 md:px-12  overflow-auto">
      <h2 className="text-dark-grey-color-light font-bold text-2xl mb-2">
        Customize your links
      </h2>
      <p className="text-primary-text-color-light text-sm mb-6">
        Add/edit/remove links below and then share all your profiles with the
        world!
      </p>
      <button
        // disabled={newLinks.length >= 2}
        className='border rounded-md py-1 
            bg-primary-white-light border-primary-button-bg font-[600] text-primary-button-bg
         flex items-center justify-center w-full'
       
      >
        + Add new link
      </button>
      <section className="mt-4 divide-y space-y-4">
        {/* {newLinks.length > 0 ? <AddLinks /> : <GetStarted />} */}
        <section className="flex w-full justify-end pt-4">
          <button
            // onClick={handleSaveLinks}
            className='bg-primary-button-bg w-full flex justify-center items-center md:w-[100px] text-white px-6 py-2 rounded-md' 
            
          >
            save
            {/* {saveLinksLoading ? <SaveSpinner /> : 'Save'} */}
          </button>
        </section>
      </section>
    </section>
  )
}

export default LinksPage
