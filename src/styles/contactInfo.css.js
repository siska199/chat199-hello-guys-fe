import styled from "styled-components";

export const ContainerContactInfo = styled.div`
  height: 100%;
  width: ${({ active }) => (active ? "25rem" : "0rem")};
  transition: width ease-in-out 0.5s;
  border-left: 0.005rem solid #8183be;
`;
export const ConatainerNavbar = styled.nav`
  height: 4rem;
  background-color: #374095;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: white;
  h1 {
    font-weight: 400;
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
  cursor: pointer;
  color: white;
  font-size: 1.5rem;
`;
