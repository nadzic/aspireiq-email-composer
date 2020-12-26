import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';
import { EmailInput } from './index';

const Container = styled.div`
  background: ${({ theme }) => theme.colors.grey};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Composer: FC = (): ReactElement => 
  <Container>
    <EmailInput />
  </Container>

export default Composer;
