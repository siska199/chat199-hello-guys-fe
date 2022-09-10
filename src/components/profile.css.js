import styled from "styled-components";



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

export const Img = styled.img``;
