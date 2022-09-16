import styled from "styled-components";

export const ContainerNavbar = styled.nav`
  background-color: #374095;
  height: 3rem;
  display: flex;
  align-items: flex-end;
  padding-bottom: 2rem;
  padding-left: 2rem;
  color: white;
  gap: 1rem;
  font-size: 1.3rem;
  .icon {
    cursor: pointer;
  }
`;

export const ContainerInfosProfile = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ContainerImg = styled.div`
  display: flex;
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  cursor: pointer;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  &:hover::before {
    content: "Change Image";
    color: white;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
  }
`;

export const Img = styled.img``;

export const ButtonEditImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ButtonSaveImage = styled.button`
  background-color: #d663c2;
  padding: 0.5rem;
  color: white;
  font-weight: 700;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  gap: 1rem;
  &:hover {
    background-color: #d7aacf;
  }
`;

export const ButtonCancelChangeImage = styled.button`
  background-color: #ffb200;
  padding: 0.5rem;
  color: white;
  font-weight: 700;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #ffcb42;
  }
`;
