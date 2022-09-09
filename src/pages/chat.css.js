import styled from "styled-components";

export const ContainerChat = styled.section`
  display: flex;
  height: 100vh;
  justify-content: space-between;
  overflow-y: hidden;
`;

export const ContainerLeft = styled.div`
  flex: 0.3;
  height: 100%;
  @media(max-width:767px) {
    flex:1.0;
  }
`;

export const ContainerContacts = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll !important;
  max-height: 80%;
  gap: 0.2rem;
  background-color: #d7aacf;
`;

export const ContainerRight = styled.div`
  flex: 0.7;
  @media(max-width:767px) {
    display: none;
  }
`;

export const ContainerMessages = styled.div`
  padding: 1rem 7rem;
  max-height: 72%;
  min-height: 72%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: scroll;
  
`
