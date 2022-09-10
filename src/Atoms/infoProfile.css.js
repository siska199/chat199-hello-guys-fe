import styled from "styled-components";

export const ContainerInfoProfile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  label {
    font-size: 0.9rem;
    color: green;
    font-weight: 800;
  }
`;

export const ContainerText = styled.div`
  font-size: 1.1rem;
  display: flex;
  justify-content: space-between;
  h1 {
    font-weight: 500;
  }
  .icon {
    cursor: pointer;
  }
`;

export const ContainerInput = styled.div`
  padding-bottom: 0.4rem;
  border-bottom: 2px solid green;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  input {
    background-color: transparent;
    border: none;
    width: 80%;
    outline: none;
  }
  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    .icon {
      cursor: pointer;
    }
  }
`;
