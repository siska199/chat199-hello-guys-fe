import React from 'react'
import ContactInfo from "./ContactInfo"
import { ContainerNavbarRight } from './navbarRight.css'

const NavbarRight = () => {
  const image =  "https://i.pinimg.com/736x/94/50/00/945000e8ff2183b081d7c3e94add39d3.jpg"
  return (
    <ContainerNavbarRight>
        <ContactInfo image={image} username={"User Test"} info={"online"} type={"profile-receiver-info"}/>
    </ContainerNavbarRight>
  )
}

export default NavbarRight