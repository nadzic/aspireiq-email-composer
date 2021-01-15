import React, {
  FC,
  ReactElement,
  useState,
  useRef,
  useEffect,
  KeyboardEvent,
  useCallback
} from 'react';
import styled, { css } from 'styled-components';
import { EnteredContact, AutoComplete } from './index';
import { validateEmail } from '../../utils/validators';

type InputProps = {
  offset: number;
};

const Container = styled.div`
  position: relative;
`;

const EmailsContainer = styled.div`
  display: flex;
  max-width: 350px;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 8px;
  overflow-x: scroll;
  margin: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Input = styled.input.attrs({
  type: "email",
  placeholder: "Enter recipients..."
}) <InputProps>`
  width: 400px;
  max-width: 400px;
  height: 49.47px;
  background: ${({ theme }) => theme.colors.lightGrey2};
  border-radius: 8px;
  border: 0;
  padding: 0 12.75px 0 12.6px;
  color: ${({ theme }) => theme.colors.lightGrey3};
  box-sizing: border-box;

  ${({ offset }) =>
    offset &&
    css`
    padding-left: ${offset + 12}px;
  `}
`;

const EmailInput: FC = (): ReactElement => {
  const [emails, setEmails] = useState<string[]>([]);
  const [emailsContainerWidth, setEmailsContainerWidth] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>('');
  const [hoveredEmail, setHoveredEmail] = useState<string>('');
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);
  const elementRef = useRef<HTMLHeadingElement | null>(null);

  const handleRemoveEmail = (indexToRemove: number): void => {
    const newEmailsArray = emails.filter((_, index) => index !== indexToRemove);
    setEmails(newEmailsArray);
  }

  const handleAddEmail = useCallback(
    (email: string): void => {
      setEmails(emails => [...emails, email]);
      setInputValue('');
    },
    [],
  );

  const handleKeyPressAddEmail = (event: KeyboardEvent): void => {
    if (event.key === 'Enter' || event.key === 'Tab') {
      if (hoveredEmail) {
        setEmails(emails => [...emails, hoveredEmail]);
      } else {
        setEmails(emails => [...emails, inputValue]);
      }
      setInputValue('');
    }
  }

  const scrollRight = (): void => {
    if (elementRef.current) {
      elementRef.current.scrollLeft = elementRef.current.scrollWidth;
    }
  }

  useEffect(() => {
    setEmailsContainerWidth(elementRef.current ? elementRef.current.offsetWidth : 0);
    scrollRight();
  }, [emails]);

  return (
    <Container>
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        offset={emailsContainerWidth}
        onBlur={() => setTimeout(() => setIsInputFocused(false), 200)}
        onFocus={() => setIsInputFocused(true)}
        onKeyDown={handleKeyPressAddEmail}
      />
      <EmailsContainer
        ref={elementRef}
      >
        {emails.map((email, index) => (
          <EnteredContact
            {...{ email }}
            error={!validateEmail(email)}
            onClick={() => handleRemoveEmail(index)}
            key={index}
          />
        ))}
      </EmailsContainer>
      {isInputFocused &&
        <AutoComplete
          offset={emailsContainerWidth}
          searchString={inputValue}
          setHoveredEmail={setHoveredEmail}
          handleAddEmail={handleAddEmail}
        />
      }
    </Container>
  );
};

export default EmailInput;
