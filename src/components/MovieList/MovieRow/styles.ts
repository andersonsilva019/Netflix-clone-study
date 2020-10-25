import styled, { css } from 'styled-components'


const KeyboardArrowStyles = css`
  position: absolute;
  width: 40px;
  height: 300px;
  background: rgba(0,0,0,0.6);
  z-index: 99;
  display: flex;
  align-items:center;
  justify-content:center;
  overflow: hidden;
  cursor: pointer;
  opacity: 0;
  transition: all ease 0.5s;
`

export const KeyboardArrowLeft = styled.div`
  ${KeyboardArrowStyles};
  left: 0;
`
export const KeyboardArrowRight = styled.div`
  ${KeyboardArrowStyles};
  right: 0;
`

export const Container = styled.div`
  margin-bottom: 30px;

  > h2 {
    margin: 0 0 0 30px;
  }

  :hover {
    ${KeyboardArrowLeft} {
      opacity: 1;
    }
    ${KeyboardArrowRight} {
      opacity: 1;
    }
  }
`;

export const MovieListArea = styled.div`
  padding-left: 30px;
  overflow-x: hidden;
`;

export const MovieList = styled.div`
  transition: all ease 0.5s;
`;

export const Item = styled.div`
  width: 200px;
  display: inline-block;
  cursor: pointer;
  > img {
    width: 100%;
    transform: scale(0.9);
    transition: all ease 0.2s;

    :hover {

    transform: scale(1);
    }
  }
`;

