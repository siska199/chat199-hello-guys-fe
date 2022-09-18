import styled from "styled-components";

export const ContainerContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 1rem;
  cursor: ${({ type }) => type === "contact" && "pointer"};
  background-color: ${({ type }) => type === "contact" && "#fac9df"};
  background-color: ${({ active }) => active && "#f3aecb"};
  transition: all ease-out 0.5s;
  color: ${({ type }) => (type === "contact" ? "black" : "white")};
  &:hover {
    background-color: ${({ type }) => type === "contact" && "#f3aecb"};
  }
  &:hover > div {
    border-bottom: none;
  }
`;

export const InfoContactUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  width: 100%;
`;

export const Img = styled.img`
  width: ${({ width }) => width};
  border-radius: 50%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  border: ${({ type }) =>
    type === "contact" ? "0.2rem solid #97c21d" : "0.2rem solid #d7aacf"};
`;

export const H1 = styled.h1`
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ type }) => type === "contact" && 700};
`;

export const P = styled.p`
  font-size: ${({ fontSize }) => fontSize};
  margin-top: 0.3rem;
`;

export const ContainerTimeAndNotif = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap:0.3rem;
`;

export const Time = styled.div`
  font-size: 0.8rem;
  padding: 0.2rem 0;
  border-radius: 10px;
  color: purple;
  font-weight: 800;
`;
export const Notif = styled.div`
  background-color: #ea5e8b;
  color: white;
  font-size: 0.9rem;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 50%;
`;
