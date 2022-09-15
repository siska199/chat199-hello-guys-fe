import styled from "styled-components";

export const FormContainer = styled.div`
  margin: auto;
  width: 25rem;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  h1 {
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
  form {
    display: flex;
    flex-direction: column;
    gap: 1.1rem;
    @media (max-width: 767px) {
      gap: 0.5rem;
    }
    button {
      cursor: pointer;
      background-color: #d663c2;
      width: 70%;
      margin: auto;
      padding: 0.5rem;
      font-size: 1rem;
      border: none;
      font-weight: 800;
      border-radius: 10px;
      color: white;
      margin-top: 0.5rem;
    }
    button:disabled{
      pointer-events: none;
      background-color: #d490c8;
    }
    p {
      text-align: center;
      span {
        cursor: pointer;
        border-bottom: 1px solid #8183be;
        font-weight: 700;
        color: #8183be;
      }
    }
  }
`;
