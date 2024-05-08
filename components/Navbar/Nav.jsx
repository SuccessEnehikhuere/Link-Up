import React from 'react'
import Link from 'next/link'
import { LinkIcon, UserIcon } from '../svgs/Navbar/NavbarSvgs'
import { useSearchParams } from 'next/navigation'
import LogoHeading from '../svgs/Login/LogoHeading'


const Navbar = () => {
  const params = useSearchParams()
  const page = params.get('page')
  return (
    <nav className="flex items-center justify-between bg-primary-white-light px-4 py-4 rounded-lg">
      <section>
        <LogoHeading
          devwidth="70"
          devheight="15"
          logoheight="25"
          logowidth="25"
        />
      </section>
      <ul className="flex items-center gap-4 font-semibold">
        <Link href="/dashboard?page=links">
          <li
            className={`flex px-2 md:px-4 py-1 rounded-md items-center gap-1 ${
              page === 'links'
                ? 'text-primary-btn-color bg-active-nav-bg'
                : 'text-dark-grey'
            }`}
          >
            <LinkIcon color={page === 'links' ? '#633CFF' : '#737373'} />
            <p className="hidden md:contents">Links</p>
          </li>
        </Link>
        <Link href="/dashboard?page=profile">
          <li
            className={`flex px-2 md:px-4 py-1 rounded-md items-center gap-1 ${
              page === 'profile'
                ? 'text-primary-btn-color bg-active-nav-bg'
                : 'text-dark-grey'
            }`}
          >
            <UserIcon color={page === 'profile' ? '#633CFF' : '#737373'} />
            <p className="hidden md:contents">Profile Details</p>
          </li>
        </Link>
      </ul>
      <section>
        <Link href="/preview">
          <button className="border border-primary-btn-color font-[600] rounded-md py-1 text-primary-btn-color bg-primary-white flex items-center justify-center w-full px-4 text-sm">
            Preview
          </button>
        </Link>
      </section>
    </nav>
  )
}

export default Navbar
