import styled from "styled-components";
import image from "../assets/bg-chat-msgs.png";

export const ContainerChat = styled.section`
  display: flex;
  height: 100vh;
  justify-content: space-between;
  overflow-y: hidden;
  position: relative;
`;

export const ContainerLeft = styled.div`
  position: relative;
  /* flex: 0.3; */
  width: 25rem;
  height: 100%;
  border-right: 0.005rem solid #8183be;
  @media (max-width: 767px) {
    flex: 1;
    display: ${({ activeContact }) => (activeContact ? "none" : "block")};
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
  flex-grow: 1;
  @media (max-width: 767px) {
    flex: 1;
    display: ${({ activeContact }) => (activeContact ? "block" : "none")};
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
  background-image: url(${image});
  @media (max-width: 767px) {
    padding: 1rem;
  }
`;
