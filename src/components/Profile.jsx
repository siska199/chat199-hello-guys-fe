import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import InfoProfile from "../Atoms/InfoProfile";
import Modal from "../Layouts/Modal";
import { handleModalProfile } from "../redux/features/profileSlice";
import {
  ContainerNavbar,
  ContainerInfosProfile,
  ContainerImg,
  Img,
} from "./profile.css";

const Profile = () => {
  const dispatch = useDispatch();
  const showProfile = useSelector((state) => state.profile.value.modal);
  const handleCloseProfile = () => {
    dispatch(handleModalProfile(false));
  };
  return (
    <Modal showModal={showProfile} type={"profile"}>
      <>
        <ContainerNavbar>
          <AiOutlineArrowLeft
            onClick={() => handleCloseProfile()}
            className="icon"
          />
          <h1>Profile</h1>
        </ContainerNavbar>
        <ContainerInfosProfile>
          <ContainerImg>
            <Img
              src={
                "https://i.pinimg.com/564x/16/ff/a8/16ffa8007d5eecf4432446b2ab85aafd.jpg"
              }
              alt=""
            />
          </ContainerImg>
          <InfoProfile label={"Full Name"} fill={"Siska Apriana Rifianti"} />
          <InfoProfile label={"Username"} fill={"Siska199"} />
        </ContainerInfosProfile>
      </>
    </Modal>
  );
};

export default Profile;
