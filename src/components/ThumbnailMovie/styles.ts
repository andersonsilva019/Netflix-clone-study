import styled, { css } from 'styled-components';

export const Container = styled.section`
  height: 100vh;
  background-size: cover;
  background-position: center;
`;

export const GradientVertical = styled.div`
  width: inherit;  /* Pegando a largura do elemento pai */
  height: inherit;  /* Pegando a altura do elemento pai */
  background: linear-gradient(to top, #111 10%, transparent 90%);

`
export const GradientHorizontal = styled.div`
  width: inherit;  /* Pegando a largura do elemento pai */
  height: inherit;  /* Pegando a largura do elemento pai */
  background: linear-gradient(to right, #111 30%, transparent 70%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
  padding-bottom: 150px;
  padding-top: 70px;

  > h2 {
    font-size: 60px;
    font-weight: bold;
  }

  > strong {
    color: #999;
    font-size: 18px;
    margin-top: 15px;
  }
`
export const Info = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 15px;
  > strong {
    :nth-of-type(1){
      display: inline-block;
      color: #46d369;
      margin-right: 15px;
    }
    :nth-of-type(2){
      display: inline-block;
      margin-right: 15px;
    }
    :nth-of-type(3){
      display: inline-block;
      margin-right: 15px;
    }
  }
`;

export const Description = styled.h4`
  margin-top: 15px;
  font-size: 20px;
  color: #999;
  max-width: 40%;
`

const ButtonStyles = css`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  padding: 12px 25px;
  border-radius: 5px;
  text-decoration: none;
  margin-right: 10px;
  opacity: 1;
  transition: all ease 0.2s;
`

export const WrapperButton = styled.div`
  margin-top: 15px;
  display: flex;

  > a {
    :nth-of-type(1){
      ${ButtonStyles};
      background: #FFF;
      color: #000;
      :hover {
        opacity: 0.7;
      }
    }
    :nth-of-type(2){
      ${ButtonStyles};
      background: #333;
      color: #FFF;
      :hover {
        opacity: 0.7;
      }
    }
  }
`
