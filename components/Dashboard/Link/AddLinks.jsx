import React  from 'react'
import useDashboardHook from '../hooks/useDashboardHook';
import AddLinksForm from './AddLinksForm'

const AddLinks = () => {
  const { newLinks } = useDashboardHook();
  return (
    <ul className="space-y-2">
      {newLinks.map((link, i) => (
        <AddLinksForm key={i} i={i + 1} link={link} />
      ))}
      
    </ul>
  )
}

export default AddLinks;
