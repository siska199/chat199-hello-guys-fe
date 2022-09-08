import styled from "styled-components";

export const ContainerChat = styled.section`
  border: 1px solid black;
  display: flex;
  max-height: 100vh;
  overflow-y: hidden;
`;

export const ContainerLeft = styled.div`
  flex: 0.3;
  border: 1px solid red;
  height: 100%;
`;

export const NavbarContainerLeft = styled.nav`
  border: 10px solid pink;
  height: 100%;
  background-color: #fac9df;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .icon-dot-tree {
    cursor: pointer;
    font-size: 1.5rem;
    color: gray;
  }
`;

export const ContainerContacts = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ea5e8b;
  color: #f3f4f6;
  gap: 0.5rem;
  padding: 0.5rem;
  overflow-y: scroll !important;
  border: 3px solid purple;
  max-height:100%;
`;

export const ContainerRight = styled.div`
  flex: 0.7;
  border: 1px solid purple;
`;
