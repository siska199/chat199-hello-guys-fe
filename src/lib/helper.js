import { imagesFemale, imagesMale } from "./data";

export const generateImages = () => {
  const indexs = [];
  const images = [];
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * 20);
    if (indexs.includes(index)) {
      index = Math.floor(Math.random() * 20);
    }
    if (i < 3) {
      images.push(imagesFemale[index]);
    } else {
      images.push(imagesMale[index]);
    }
    indexs.push(index);
  }
  return images;
};

export const firstCharUpperCase = (sentence) => {
  const words = [];
  sentence.split(" ").forEach((word) => {
    words.push(word.charAt(0).toUpperCase() + word.slice(1));
  });
  return words.join(" ");
};

export const inputsFormAuth = [
  {
    name: "fullname",
    label: "Fullname",
    type: "text",
    pattern: "^([a-zA-Z]+[ ]{0,1})+$",
    error: "Fullame should only contain alphaphet",
  },
  {
    name: "username",
    label: "Username",
    type: "text",
    pattern: "^[a-z0-9]{3,10}$",
    error:
      "Username should be 3-10 characters and should't contain uppercase letter",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
    error:
      "Password should be 8-20 characters and includes at least contain 1 lowercase, 1 uppercase, 1 numeric, and 1 special character",
  },
];
