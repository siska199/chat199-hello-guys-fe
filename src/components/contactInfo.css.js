import styled from "styled-components";

export const ContainerContactInfo = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0 1rem;
  cursor: ${({ type }) =>
    type === "contact-receiver-info" && "pointer"};
  background-color: ${({ type }) =>
    type === "contact-receiver-info" && "#fac9df"};
  color: ${({ type }) =>
    type === "contact-receiver-info" ? "black" : "white"};
  &:hover {
    background-color: ${({ type }) =>
      type === "contact-receiver-info" && "#f3aecb"};
  }
  &:hover > div {
    border-bottom: none;
  }
`;

export const InfoContactUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  width: 100%;
`;

export const Img = styled.img`
  width: ${({ width }) => width};
  border-radius: 50%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  border: ${({ type }) =>
    type === "contact-receiver-info"
      ? "0.2rem solid #97c21d"
      : "0.2rem solid #d7aacf"};
`;

export const H1 = styled.h1`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ type }) => type === "contact-receiver-info" && 700};
`;

export const P = styled.p`
  font-size: ${({ fontSize }) => fontSize};
  margin-top: 0.3rem;
`;
