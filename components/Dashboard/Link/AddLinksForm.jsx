import React, { useEffect, useState } from 'react'
import { IoMenuSharp } from 'react-icons/io5'
import Select from 'react-select'
import { LinkIcon } from '@/components/svgs/Navbar/NavbarSvgs'
import { LinksMenu } from '@/utils/LinksMenu'
import { useSelector } from 'react-redux'
import useDashboardHook from '../hooks/useDashboardHook'


const AddLinksForm = ({ i, link }) => {
 const [selectedOption, setSelectedOption] = useState(null);
 const [linkAddress, setLinkAddress] = useState('');
 const {allLinks, newLinks} = useSelector((state)=>state.helper);

 const {
   styles,
   handleRemoveLink,
   handleActivateSave,
   deActivateSave,
   updateLinks,
 } = useDashboardHook();


 useEffect(() => {
   if (selectedOption && linkAddress) {
     updateLinks(link?.id, selectedOption, linkAddress)
     handleActivateSave(selectedOption, linkAddress)
   } else {
     deActivateSave()
   }
 }, [
   selectedOption,
   linkAddress,
   link.id,
   updateLinks,
   handleActivateSave,
   deActivateSave,
 ])

  return (
    <li key={i} className="bg-primary-bg px-4 py-2 rounded-md">
      <div className="flex items-center justify-between text-primary-color-light">
        <span className="flex items-center text-sm gap-1 font-bold">
          <IoMenuSharp />
          Link #{i}
        </span>
        <span>
          <button onClick={() => handleRemoveLink(link.id)}>Remove</button>
        </span>
      </div>
      <div className="mb-3 text-dark-grey">
        <label htmlFor="" className="block mb-">
          Platform
        </label>
        <Select
          options={LinksMenu}
          styles={styles}
          onChange={setSelectedOption}
          isOptionDisabled={(val) =>
            allLinks.find(
              (link) => link?.name?.toLowerCase() === val?.value?.toLowerCase()
            ) ||
            newLinks.find(
              (link) => link?.name?.toLowerCase() === val?.value?.toLowerCase()
            )
              ? true
              : false
          }
        />
      </div>
      <div className="mb-3 text-dark-grey">
        <label htmlFor="" className="block mb-">
          Link
        </label>
        <div className="border flex items-center gap-3 py-2 px-3">
          <LinkIcon color="#737373" />
          <input
            type="text"
            value={linkAddress}
            onChange={(e) => setLinkAddress(e.target.value)}
            placeholder="e.g. https://www.github.com/johnappleseed"
            className="w-full focus:outline-none rounded-lg"
          />
        </div>
      </div>
    </li>
  )
}

export default AddLinksForm
