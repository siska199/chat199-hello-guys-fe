import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  height: 100vh;
  justify-content: center;
  @media (max-width: 767px) {
    padding: 1rem 0.5rem;
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex: 0.3;
  img {
    margin: auto;
  }

  @media (max-width: 992px) {
    img {
      width: 20rem;
    }
  }
  @media (max-width: 767px) {
    img {
      width: 10rem;
    }
  }
`;

export const AuthContainer = styled.div`
  display: flex;
  flex: 0.3;
`;
