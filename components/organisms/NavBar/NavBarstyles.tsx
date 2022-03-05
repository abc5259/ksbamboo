import styled from "styled-components";

export const Header = styled.header`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: 1.4rem;
  color: #44bd32;
`;

export const Nav = styled.ul`
  display: flex;
  align-items: center;
`;

export const List = styled.li`
  margin-left: 20px;
  /* transition: color 0.2s ease-in; */
  font-size: 1.1rem;
  .profile {
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    &:hover {
      svg {
        fill: ${props => props.theme.accentColor};
      }
    }
    div {
      width: 33px;
      height: 33px;
      border-radius: 50%;
      background-color: ${props => props.theme.accentColor};
    }
    svg {
      transition: fill 0.2s ease-in;
    }
  }
`;

export const NaveBarWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  padding: 0 80px;
  background-color: #202329;
  color: white;
  a {
    cursor: pointer;
  }
`;
