import React, { FC, ReactElement } from 'react';
import styled, { css } from 'styled-components';
import CloseImage from '../../icons/close.png';
import ErrorCircleImage from '../../icons/error-circle.png';

interface ContainerProps {
  error?: boolean;
};

interface EnteredContactProps {
  error?: boolean;
  email: string;
  onClick: () => void;
};

const CloseImg = styled.img`
  width: 12px;
  height: 12px;
  margin: 8px;
`;

const ErorrCircleImg = styled(CloseImg)`
  display: block !important;
`;

const EmptyBox = styled.div`
  background: ${({ theme }) => theme.colors.lightGrey2};
  width: 28px;
  height: 20px;
`;

const Container = styled.div<ContainerProps>`
  display: flex;
  background: ${({ theme }) => theme.colors.lightGrey2};
  align-items: center;
  height: 28px;
  padding: 0 0 0 8px;
  border-radius: 6px;

  &:hover {
    background: ${({ theme }) => theme.colors.lightGrey};
  }

  ${CloseImg} {
    display: none;
  }

  &:hover > ${CloseImg} {
    display: block;
  }

  &:hover > ${EmptyBox} {
    display: none;
  }

  ${({ error }) =>
  error &&
  css`
    background: ${({ theme }) => theme.colors.lightRed};

    &:hover {
      background: ${({ theme }) => theme.colors.lightRed};
    }

    &:hover > ${ErorrCircleImg} {
      display: none !important;
    }
  `}
`;

const EmailText = styled.div`
  white-space: nowrap;
  font-weight: 700;
  font-size: 14px;
`;

const EnteredContact: FC<EnteredContactProps> = ({ email, error, onClick }): ReactElement =>
  <Container {...{error}}>
    <EmailText>{email}</EmailText>
      {error ?
        <ErorrCircleImg
          src={ErrorCircleImage}
          alt="error"
        /> :
        <EmptyBox />
      }
      <CloseImg
        src={CloseImage}
        alt="close"
        onClick={onClick}
      />
  </Container>

export default EnteredContact;
