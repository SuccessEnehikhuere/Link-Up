import React from 'react'
import LinkLogo from './LinkLogo'
import DevLinks from './DevLinks'

const LogoHeading = ({ devwidth, devheight, logowidth, logoheight }) => {
  return (
    <div className="flex items-center justify-center">
      <LinkLogo height={logoheight} width={logowidth} />
      <DevLinks height={devheight} width={devwidth} />
    </div>
  )
}

export default LogoHeading
