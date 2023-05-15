import styled from 'styled-components';

import { Button } from '../../../components/Button/styled';
export const InputBox = styled.div`
  display: flex;
  ${Button} {
    flex-shrink: 0;
    width: 120px;
    text-align: center;
    cusor: pointer;
    height: 40px;
  }
`;
export const Input = styled.input`
  flex-shrink: 0;
  width: 100%;
  padding: 4px;
  border-radius: 25px;
`;
