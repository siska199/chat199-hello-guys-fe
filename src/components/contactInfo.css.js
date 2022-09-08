import styled from "styled-components";

export const ContainerContactInfo = styled.div`
  display: flex;
  gap: 0.5rem;
  img {
    border: 2px solid #d7aacf;
    width: 3.5rem;
    border-radius: 50%;
  }
  .info-contact-user {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const H1 = styled.h1`
  font-size: 1.05rem;
`;

export const P = styled.p`
  font-size: 0.85rem;
  margin-top: 0.3rem;
`;
