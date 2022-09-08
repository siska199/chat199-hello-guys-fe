import React from "react";
import { ContainerInput, ContainerSearchContact } from "./searchContact.css";

const SearchContact = () => {
  return (
    <ContainerSearchContact>
      <ContainerInput>
        <input placeholder="Search contact..."/>
      </ContainerInput>
    </ContainerSearchContact>
  );
};

export default SearchContact;
