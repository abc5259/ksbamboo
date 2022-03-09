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
  margin-left: 10px;
  /* transition: color 0.2s ease-in; */
  font-size: 1.1rem;
  .profile {
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
      svg.down {
        fill: ${props => props.theme.accentColor};
      }
    }
    svg.down {
      transition: fill 0.2s ease-in;
    }
  }
`;

export const NaveBarWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  padding: 0 40px;
  background-color: #202329;
  color: white;
  a {
    cursor: pointer;
  }
`;
