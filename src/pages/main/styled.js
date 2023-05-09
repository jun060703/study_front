import styled from 'styled-components';
import Button from '../../components/Button';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const MainWapper = styled.div`
  disply: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  background-color: yellow;
  > div {
    font-size: 24px;
    font-weight: 700;
    &:hover {
      color: red;
    }
  }
  > ${Button} {
    padding: 8px 14px;
    border: none;
    font-size: 16px;
    cursor: pointer;
  }
`;
