import styled from "styled-components";

export const ContainerMessage = styled.div`
  font-size: 0.8rem;
  display: flex;
  width: auto;
`;
export const MessageText = styled.div`
  padding: 0.5rem 1rem;
  max-width: 25rem;
  color: white;
  border-radius: 10px;
  border-top-right-radius: ${({ type }) => type === "sender" && "0px"};
  border-top-left-radius: ${({ type }) => type === "receiver" && "0px"};
  background-color: ${({ type }) => (type === "sender" ? "#97c21d" : "orange")};
  ${({ type }) => type === "sender" && "margin-left:auto"}
`;
