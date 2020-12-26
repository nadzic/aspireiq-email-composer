import React from 'react';
import { screen } from '@testing-library/react';
import { render} from '../../../utils/test-utils';
import EmailInput from '../../../components/composer/EmailInput';

/* I will be able to add way more extensive tests, etc., */
/* but it was just for purposes to demonstrate */
describe("<EmailInput />", () => {
  test('should be in the document', async () => {
    const { container } =  render(<EmailInput />);
    const input = container.querySelector('input')

    expect(input).toBeInTheDocument();
  });

  test('should find component by placeholder text', async () => {
    render(<EmailInput />);
    const input = screen.getByPlaceholderText('Enter recipients...');

    expect(input).toBeInTheDocument();
  });
});
