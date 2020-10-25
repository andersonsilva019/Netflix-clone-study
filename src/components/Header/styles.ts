import styled from 'styled-components'

export const Container = styled.header<{ backgroundBlack: boolean }>`
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  left: 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding: 0 30px;
  background: ${props => props.backgroundBlack ? '#141414' : 'transparent'};
  transition: all ease 0.5s;

  > a {
    height: 60px;
    img {
      height: 100%;
    }
  }
`;
export const Logo = styled.div`
  height: 60px;
  > a {
    img {
      height: 100%;
      border-radius: 3px;
    }
  }


`;
