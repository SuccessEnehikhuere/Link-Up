import React from 'react'
import LogoHeading from '../svgs/Login/LogoHeading'
import { EyeIcon, LinkIcon, UserIcon } from '../svgs/Navbar/NavbarSvgs'
import Link from 'next/link'

const Navbar = () => {
  return (
    <main className="flex justify-center font-sans p-4 mx-auto w-full">
      <section className="flex justify-between w-full bg-white rounded-lg items-center p-4">
        <div>
          <LogoHeading
            devwidth="70"
            devheight="15"
            logoheight="25"
            logowidth="25"
          />
        </div>
        <div className="flex gap-4 justify-center items-center font-semibold">
          {/*links btn */}
          <Link href="/links">
            <button className="flex items-center justify-center  rounded-md gap-1 px-2 md:px-4 py-2">
              <LinkIcon />
              <p className="hidden md:contents">Links</p>
            </button>
          </Link>

          {/*profile btn */}
          <Link href="/profile">
            <div className="flex justify-center items-center py-2 px-2 md:px-4 rounded-md gap-1">
              <UserIcon />
              <p className="hidden md:contents">Profile Details</p>
            </div>
          </Link>
        </div>

        {/*preview btn */}
        <div>
          <Link href="/preview">
            <button className="px-4 py-1 border border-[#633CFF] font-[600] text-[#633CFF]  rounded-md">
              <p className="hidden md:contents">Preview</p>
              <div className="md:hidden contents">
                <EyeIcon />
              </div>
            </button>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Navbar
