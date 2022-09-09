import React from "react";
import { BsArrowRight } from "react-icons/bs";
import ContactInfo from "./ContactInfo";
import { ContainerNavbarRight } from "./navbarRight.css";

const NavbarRight = (props) => {
  const { setContactActive } = props;
  const image =
    "https://i.pinimg.com/736x/94/50/00/945000e8ff2183b081d7c3e94add39d3.jpg";
  return (
    <ContainerNavbarRight onClick={() => setContactActive(null)}>
      <ContactInfo
        image={image}
        username={"User Test"}
        info={"online"}
        type={"profile-receiver-info"}
      />
      <BsArrowRight className="icon" />
    </ContainerNavbarRight>
  );
};

export default NavbarRight;
