import styled from "styled-components";

export const ContainerModal = styled.section`
  z-index: 9999;
  background-color: #f3aecb;
  width: ${({ width }) => width};
  top: 0;
  left: 0;
  position: absolute;
  height: 100%;
  transform: translateX(-100%);
  &.modal-active {
    transform: translateX(0);
  }

  transition: all ease-in-out 0.5s;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
