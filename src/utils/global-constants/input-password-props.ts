import { validateInput } from '../helpers/validate';

const inputPasswordProps = {
  id: 'password',
  label: '',
  type: 'password',
  name: 'password',
  placeholder: 'Пароль',
  required: 'required',
  pattern: '^(?:(?=.*\\d)(?=.*[A-Z]).*)$',
  maxLength: 20,
  minLength: 3,
  error: 'От 8 до 40 символов, обязательны хотя бы одна заглавная буква и цифра',
  className: 'input',
  events: {
    focus: (event: Event): void => validateInput(event.target!),
    blur: (event: Event): void => validateInput(event.target!),
  },
};

export default inputPasswordProps;
