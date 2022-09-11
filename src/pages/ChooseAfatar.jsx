import React from "react";
import Page from "../Layouts/Page";
import {
  ContainerChooseAfatar,
  ContainerImages,
  Img,
  Button,
} from "./chooseAfatar.css";
import { generateImages } from "../lib/helper";
import { useState } from "react";
import { useEffect } from "react";

const ChooseAfatar = () => {
  const [avatarChoose, setAvatarChoose] = useState(null);
  const [avatars, setAvatars] = useState([]);
  useEffect(() => {
    const images = generateImages();
    setAvatars(images);
  }, []);
  return (
    <Page>
      <ContainerChooseAfatar>
        <h1>
          {" "}
          <span>Pick an</span> <span>avatar</span> <span>as your</span>{" "}
          <span>image</span> <span>profile</span>{" "}
        </h1>
        <ContainerImages>
          {avatars.map((data, i) => (
            <Img
              active={avatarChoose === i ? true : false}
              onClick={() => setAvatarChoose(i)}
              key={i}
              src={data}
              alt=""
            />
          ))}
        </ContainerImages>
        <Button>Choose As Profile Picture</Button>
      </ContainerChooseAfatar>
    </Page>
  );
};

export default ChooseAfatar;
