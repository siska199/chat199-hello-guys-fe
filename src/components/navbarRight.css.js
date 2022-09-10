import styled from "styled-components";

export const ContainerNavbarRight = styled.nav`
  height: 4rem;
  background-color: #374095;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.2rem;
  color: white;
  cursor: pointer;
  flex-grow: 1;
  justify-content: flex-end;
  input {
    width: 90%;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #f3aecb;
    outline: none;
    color: white;
    padding: 0.3rem 0rem;
  }
`;

export const Icon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  &:hover {
    background-color: #8183be;
  }
  &.icon-search {
    background-color: ${({ active }) => active && "#8183be"};
  }
  &.icon-arrow-back {
    font-size: 1.5rem;
    display: none;
    @media (max-width: 767px) {
      display: flex;
    }
  }
`;
