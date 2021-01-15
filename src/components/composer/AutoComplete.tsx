import React, {
  FC,
  ReactElement,
  useEffect,
  useState,
  memo
} from 'react';
import styled, { css } from 'styled-components';
import emailsData from '../../data/emails.json';

type ContainerProps = {
  offset: number;
  visible: boolean;
};

type AutoCompleteProps = {
  offset: number;
  searchString: string;
  handleAddEmail: (email: string) => void;
  setHoveredEmail: (email: string) => void;
};

const Container = styled.div<ContainerProps>`
  position: absolute;
  display: ${props => props.visible ? 'flex' : 'none'};
  flex-direction: column;
  background: ${({ theme }) => theme.colors.light};
  box-shadow: 0px 4px 14px rgba(26, 24, 24, 0.08);
  width: 294px;
  max-height: 261.7px;
  padding-bottom: 6.71px;
  top: 40px;
  left: 20px;

  ${({ offset }) =>
    offset &&
    css`
    left: ${offset + 20}px;
  `}
`;

const ScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.lightGrey2};
  overflow-y: auto;
  border-radius: 4px;
`;

const AutoCompleteItem = styled.div`
  display: flex;
  align-items: center;
  height: 38px;
  min-height: 38px;
  font-style: normal;
  font-size: 14px;
  line-height: 24px;
  padding: 0 21px;

  &:hover {
    background: ${({ theme }) => theme.colors.lightBlue};
  }
`;

const LinearGradient = styled.div`
  z-index: 100;
  position: absolute;
  width: 100%;
  transform: rotate(-180deg);
  background: linear-gradient(180deg, #FDFDFD 0%, #FDFDFD 50.28%, rgba(253, 253, 253, 0) 100%);
  bottom: 0;
  height: 36px;
  border-radius: 4px;
`;

const AutoComplete: FC<AutoCompleteProps> = ({ offset, handleAddEmail, searchString, setHoveredEmail }): ReactElement => {
  const [hoveredIndex, setHoverredIndex] = useState<number>(-1);
  const filteredEmails = emailsData.sort().filter(email => email.startsWith(searchString));

  useEffect(() => {
    if (filteredEmails[hoveredIndex]) {
      setHoveredEmail(filteredEmails[hoveredIndex]);
    } else {
      setHoveredEmail('');
    }
  }, [filteredEmails, hoveredIndex, setHoveredEmail]);

  return (
    <Container
      {...{ offset }}
      visible={filteredEmails.length > 0}
      onMouseLeave={() => {
        setHoveredEmail('');
        setHoverredIndex(-1);
      }}
    >
      <ScrollContainer>
        {filteredEmails.map((email: string, index: number) => (
          <AutoCompleteItem
            onClick={() => handleAddEmail(email)}
            onMouseEnter={() => setHoverredIndex(index)}
            key={index}
          >
            {email}
          </AutoCompleteItem>
        ))}
      </ScrollContainer>
      <LinearGradient />
    </Container>
  );
};

export default memo(AutoComplete);
