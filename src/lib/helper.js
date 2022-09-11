import { imagesFemale, imagesMale } from "./data";

export const generateImages = () => {
  const indexs = [];
  const images = [];
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * 20);
    if (indexs.includes(index)) index = Math.floor(Math.random() * 20);
    if (i < 3) {
      images.push(imagesFemale[index]);
    } else {
      images.push(imagesMale[index]);
    }
    indexs.push(index);
  }
  return images;
};
