import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 30px;

  > h2 {
    margin: 0 0 0 30px;
  }
`;

export const MovieListArea = styled.div`
  padding-left: 30px;
  overflow-x: hidden;
`;

export const MovieList = styled.div`
  width: 9999px;
`;

export const Item = styled.div`
  width: 150px;
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

