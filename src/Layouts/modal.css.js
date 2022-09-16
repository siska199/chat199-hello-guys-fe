import styled from "styled-components";

export const ContainerModal = styled.section`
  z-index: 9999;
  background-color: #f3aecb;
  width: ${({ width }) => width};
  top: 0;
  left: 0;
  position: ${({ position }) => position};
  height: 100%;
  overflow-y: scroll;
  transform: translateX(-100%);
  &.modal-active {
    transform: translateX(0);
  }
  ${({ type }) => type === "contactInfo" && "flex:0.3"}
  transition: all ease-in-out 0.5s;
  @media (max-width: 767px) {
    width: 100%;
  }
`;
