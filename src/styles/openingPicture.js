import styled from "styled-components";

export const ContainerOpenPicture = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
  h1 {
    width : 27rem;
    text-align: center;
    font-size: 2rem;
    font-family: "Sweety Strawberry";
    letter-spacing: 0.3rem;
    span:nth-child(1) {
      color: #8183be;
    }
    span:nth-child(2) {
      color: #ea5e8b;
    }
    span:nth-child(3) {
      color: orange;
    }
    span:nth-child(4) {
      color: #97c21d;
    }
  }
  img {
    width: 20rem;
  }
`;
