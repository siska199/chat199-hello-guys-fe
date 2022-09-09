import React from 'react'
import ContactInfo from "./ContactInfo"
import { ContainerNavbarRight } from './navbarRight.css'

const NavbarRight = () => {
  return (
    <ContainerNavbarRight>
        <ContactInfo type={"profile-receiver-info"}/>
    </ContainerNavbarRight>
  )
}

export default NavbarRight