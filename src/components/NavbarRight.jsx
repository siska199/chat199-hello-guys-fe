import React, { useState } from "react";
import { BsArrowRight, BsSearch, BsThreeDotsVertical } from "react-icons/bs";
import SummaryContactInfo from "./SummaryContactInfo";
import { ContainerNavbarRight, IconsContainer, Icon } from "./navbarRight.css";

const NavbarRight = (props) => {
  const { setContactActive } = props;
  const [searchActive, setSearchActive] = useState(false);
  const image =
    "https://i.pinimg.com/736x/94/50/00/945000e8ff2183b081d7c3e94add39d3.jpg";
  return (
    <ContainerNavbarRight>
      <SummaryContactInfo
        image={image}
        username={"User Test"}
        info={"online"}
        type={"profile-receiver-info"}
      />
      <IconsContainer>
        {searchActive && <input />}
        <Icon
          className="icon-search"
          active={searchActive}
          onClick={() => setSearchActive(searchActive ? false : true)}
        >
          <BsSearch />
        </Icon>
        {!searchActive && (
          <>
            <Icon className="icon-setting">
              <BsThreeDotsVertical />
            </Icon>
            <Icon className="icon-arrow-back">
              <BsArrowRight onClick={() => setContactActive(null)} />
            </Icon>
          </>
        )}
      </IconsContainer>
    </ContainerNavbarRight>
  );
};

export default NavbarRight;
