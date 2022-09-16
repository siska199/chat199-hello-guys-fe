import React, { useState } from "react";
import {
  ContainerInfoProfile,
  ContainerText,
  ContainerInput,
} from "../styles/infoProfile.css";
import { GrEdit } from "react-icons/gr";
import { AiOutlineCheck } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import { useDispatch } from "react-redux";
import {
  handleGetProfileData,
  handleUpdateProfile,
} from "../redux/features/profileSlice";

const InfoProfile = (props) => {
  const dispatch = useDispatch();
  const { label, field, name } = props;
  const [value, setValue] = useState(field);
  const [edit, setEdit] = useState(false);

  const handleEdit = () => {
    edit
      ? dispatch(handleUpdateProfile({ [name]: value })).then(() => {
          dispatch(handleGetProfileData()).then(() => {
            setEdit(false);
          });
        })
      : setEdit(true);
  };

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <ContainerInfoProfile>
      <label htmlFor="">{label}</label>
      {edit ? (
        <ContainerInput>
          <input
            onChange={(e) => handleOnChange(e)}
            name={name}
            value={value}
          />
          <div>
            <span>25</span>
            <BsEmojiSmile className="icon" />
            <AiOutlineCheck onClick={() => handleEdit()} className="icon" />
          </div>
        </ContainerInput>
      ) : (
        <ContainerText>
          <h1>{field}</h1>
          <GrEdit className="icon" onClick={() => handleEdit()} />
        </ContainerText>
      )}
    </ContainerInfoProfile>
  );
};

export default InfoProfile;
