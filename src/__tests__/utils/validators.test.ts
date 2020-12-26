import { validateEmail } from '../../utils/validators';

describe('validate email function', () => {
  it('testing it without parameter', () => {
    expect(validateEmail()).not.toBeUndefined();
    expect(validateEmail()).toBeFalsy();
  });

  it('testing it with wrong email addresses', () => {
    expect(validateEmail('blabla')).toBe(false);
    expect(validateEmail('blabla@ssss')).toBe(false);
    expect(validateEmail('blabla&ssss.com')).toBe(false);
  });

  it('testing it with correct email', () => {
    expect(validateEmail('test@test.com')).toBe(true);
    expect(validateEmail('nik@anix.io')).toBe(true);
  });
});