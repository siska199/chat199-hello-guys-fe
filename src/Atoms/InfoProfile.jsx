import React, { useState } from "react";
import {
  ContainerInfoProfile,
  ContainerText,
  ContainerInput,
} from "./infoProfile.css";
import { GrEdit } from "react-icons/gr";
import { AiOutlineCheck } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";

const InfoProfile = (props) => {
  const { label, fill } = props;
  const [edit, setEdit] = useState(false);

  const handleEditInfo = () => {
    setEdit(edit ? false : true);
  };
  return (
    <ContainerInfoProfile>
      <label htmlFor="">{label}</label>
      {edit ? (
        <ContainerInput>
          <input value={fill} />
          <div>
            <span>25</span>
            <BsEmojiSmile className="icon" />
            <AiOutlineCheck onClick={() => handleEditInfo()} className="icon" />
          </div>
        </ContainerInput>
      ) : (
        <ContainerText>
          <h1>{fill}</h1>
          <GrEdit className="icon" onClick={() => handleEditInfo()} />
        </ContainerText>
      )}
    </ContainerInfoProfile>
  );
};

export default InfoProfile;
