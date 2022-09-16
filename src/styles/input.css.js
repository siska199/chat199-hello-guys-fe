import styled from "styled-components";

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: auto;
  gap: 0.3rem;
  & > input.input-shake {
    border: 1px solid red;
  }
  label {
    font-size: 1.2rem;
    font-weight: 800;
  }
  input {
    outline: none;
    padding: 0.5rem 0.7rem;
    border: none;
    font-size: 0.95rem;
    background-color: #e4e4e7;
    border: 0.005rem solid #a1a1aa;
    border-radius: 10px;
    font-weight: 200;
    &:focus {
      background-color: #f4f4f5;
    }
    &:invalid[notFocused="false"] ~ span {
      display: block;
    }
  }
  span {
    font-size: 0.7rem;
    color: red;
    display: none;
  }
`;
