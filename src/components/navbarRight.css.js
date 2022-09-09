import styled from "styled-components";

export const ContainerNavbarRight = styled.nav`
  height: 4rem;
  background-color: #374095;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .icon {
    font-size: 2rem;
    color: white;
    margin-right: 0.6rem;
    cursor: pointer;
    display: none;
    @media (max-width: 767px) {
      display: block;
    }
  }
`;
