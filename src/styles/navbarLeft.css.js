import styled from "styled-components";

export const NavbarContainerLeft = styled.nav`
  position: relative;
  height: 4rem;
  color: white;
  background-color: #374095;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 3rem;
    border-radius: 50%;
    border: 2px solid #d7aacf;
    margin-left: 0.7rem;
    cursor: pointer;
  }
`;

export const ContainerIcons = styled.div`
  display: flex;
  gap: 0.7rem;
  cursor: pointer;
  font-size: 1.5rem;
`;

export const Icon = styled.div`
  width : 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
  background-color: ${({ active }) => active && "#8183be"};
  &:hover {
    background-color: #8183be;
  }
`;
