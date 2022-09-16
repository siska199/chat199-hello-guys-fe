import React, { useRef, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import InfoProfile from "../atoms/InfoProfile";
import Modal from "../Layouts/Modal";
import { handleUploadImageToCloudinary } from "../lib/helper";
import {
  handleGetProfileData,
  handleModalProfile,
  handleUpdateProfile,
} from "../redux/features/profileSlice";
import {
  ContainerNavbar,
  ContainerInfosProfile,
  ContainerImg,
  Img,
  ButtonSaveImage,
  ButtonEditImageContainer,
  ButtonCancelChangeImage,
} from "../styles/profile.css";
import LoadingIcon from "../atoms/LoadingIcon";

const Profile = () => {
  const imgRef = useRef(null);
  const dispatch = useDispatch();
  const showProfile = useSelector((state) => state.profile.value.modal);
  const { image, fullname, username, info } = useSelector(
    (state) => state.profile.value.user
  );
  const [imageChange, setImageChange] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCloseProfile = () => {
    dispatch(handleModalProfile(false));
    setImageChange(null);
  };
  const handleOnChangeImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (readerEvent) => {
        setImageChange({
          file,
          urlPreview: readerEvent.target.result,
        });
      };
    }
  };
  const handleSaveImage = async () => {
    setLoading(true);
    const url_imge = await handleUploadImageToCloudinary(imageChange.file);
    dispatch(handleUpdateProfile({ image: url_imge })).then(() => {
      dispatch(handleGetProfileData()).then(() => {
        setImageChange(null);
        setLoading(false);
        NotificationManager.success("Change Profile Picture Success", "Success", 4000);
      });
    });
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
          <ContainerImg
            imagePreview={imageChange?.urlPreview}
            onClick={() => imgRef.current.click()}
          >
            <Img
              src={imageChange?.urlPreview ? imageChange?.urlPreview : image}
              alt=""
            />
            <input
              ref={imgRef}
              type="file"
              accept="image/*"
              name="image"
              hidden
              onChange={(e) => handleOnChangeImage(e)}
            />
          </ContainerImg>
          {imageChange?.urlPreview && (
            <ButtonEditImageContainer>
              <ButtonSaveImage onClick={() => handleSaveImage()}>
                Save Image Profile
                {loading && <LoadingIcon />}
              </ButtonSaveImage>
              <ButtonCancelChangeImage onClick={() => setImageChange(null)}>
                Cancel Change Image
              </ButtonCancelChangeImage>
            </ButtonEditImageContainer>
          )}
          <InfoProfile label={"Full Name"} name={"fullname"} field={fullname} />
          <InfoProfile label={"Username"} name={"username"} field={username} />
          <InfoProfile label={"Info"} name={"info"} field={info} />
        </ContainerInfosProfile>
      </>
      <NotificationContainer />
    </Modal>
  );
};

export default Profile;
