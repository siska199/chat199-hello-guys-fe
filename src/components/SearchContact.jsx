import React, { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { BsFilter } from "react-icons/bs";
import {
  ContainerInput,
  ContainerSearchContact,
  Icon,
} from "./searchContact.css";

const SearchContact = () => {
  const [focus, setFocus] = useState(false);
  const [filter, setFilter] = useState(false);

  return (
    <ContainerSearchContact>
      <ContainerInput>
        {focus ? (
          <AiOutlineArrowLeft className="icon" />
        ) : (
          <FiSearch className="icon" />
        )}
        <input
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholder="Search contact..."
        />
      </ContainerInput>
      <Icon active={filter} onClick={() => setFilter(filter ? false : true)}>
        <BsFilter />
      </Icon>
    </ContainerSearchContact>
  );
};

export default SearchContact;
