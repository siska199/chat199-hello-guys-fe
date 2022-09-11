import styled from "styled-components";

export const ContainerChooseAfatar = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  margin: auto;
  overflow: hidden !important;
  h1 {
    text-align: center;
    font-size: 3rem;
    font-family: "Sweety Strawberry";
    @media (max-width: 767px) {
      font-size: 2rem;
    }
    span:nth-child(1) {
      color: #374095;
    }
    span:nth-child(2) {
      color: #8183be;
    }
    span:nth-child(3) {
      color: #ea5e8b;
    }
    span:nth-child(4) {
      color: orange;
    }
    span:nth-child(5) {
      color: #97c21d;
    }
  }
`;

export const ContainerImages = styled.div`
  display: flex;
  gap: 1rem;
  width: 30rem;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 767px) {
    width: 20rem;
  }
`;

export const Img = styled.img`
  width: 7rem;
  height: 7rem;
  @media (max-width: 767px) {
    width: 5rem;
    height: 5rem;
  }
  border-radius: 50%;
  cursor: pointer;
  ${({ active }) => active && "border: 5px solid #ea5e8b"};
`;

export const Button = styled.button`
  border: none;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 1rem;
  font-size: 1.1rem;
  cursor: pointer;
  background-color: #ea5e8b;
  &:hover {
    background-color: #f3aecb;
  }
`;
