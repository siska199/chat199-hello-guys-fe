import styled from "styled-components";

export const ContainerProfile = styled.div`
  z-index: 9999;
  background-color: #f3aecb;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  height: 100%;
  transform: translateX(-100%);
  &.modal-active {
    transform: translateX(0);
  }

  transition: all ease-in-out 1s;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const ContainerNavbar = styled.nav`
  background-color: #374095;
  height: 6rem;
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
  margin-bottom: 2rem;
`;

export const Img = styled.img`


`;
