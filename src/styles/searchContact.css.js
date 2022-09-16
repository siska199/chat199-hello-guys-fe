import styled from "styled-components";

export const ContainerSearchContact = styled.div`
  padding: 0rem 1rem;
  padding-bottom: 1rem;
  background-color: #374095;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  gap: 0.5rem;
`;

export const Icon = styled.div`
    font-size: 1.5rem;
    cursor: pointer;
    width : 3rem;
    height: 2.2rem;
    background-color: ${({active})=>active&&"#8183be"} ;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

`

export const ContainerInput = styled.div`
  margin: auto;
  background-color: #d4e7d1;
  border-radius: 10px;
  width: 100%;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  gap: 0.5rem;
  input {
    background-color: transparent;
    border: none;
    outline: none;
  }
  .icon {
    color: gray;
    cursor: pointer;

  }
`;
