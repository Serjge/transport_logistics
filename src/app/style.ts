import styled from 'styled-components';

export const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  height: 100%;

  & h1 {
    margin-top: 50px;
    margin-bottom: 30px;
  }
`;

export const AppContainer = styled.div`
  width: 95vw;
  display: flex;
  justify-content: space-between;
  height: 75vh;
`;
