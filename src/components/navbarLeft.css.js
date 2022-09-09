import styled from "styled-components";

export const NavbarContainerLeft = styled.nav`
  height: 4rem;
  color: white;
  background-color: #374095;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .container-icon {
    display: flex;
    gap: 0.7rem;
    cursor: pointer;
    font-size: 1.5rem;
    .icon {
      padding: 0.5rem;
      border-radius: 50%;
      &:hover {
        background-color: #8183be;
      }
    }
  }
  img {
    width: 3rem;
    border-radius: 50%;
    border: 2px solid #d7aacf;
    margin-left: 0.7rem;
  }
`;
