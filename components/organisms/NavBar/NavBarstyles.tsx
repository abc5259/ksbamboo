import styled from "styled-components";

export const Header = styled.header`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 32px;
  color: #44bd32;
`;

export const Nav = styled.ul`
  display: flex;
`;

export const List = styled.li`
  margin-left: 10px;
  transition: color 0.2s ease-in;
  font-size: 18px;
  &:hover {
    color: ${props => props.theme.accentColor};
  }
`;

export const NaveBarWrapper = styled.div`
  padding: 0 30px;
  background-color: #202329;
  color: white;
`;
