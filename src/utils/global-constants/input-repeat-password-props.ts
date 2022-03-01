import { validateInput } from '../helpers/validate';

const inputRepeatPasswordProps = {
  id: 'repeat-password',
  label: '',
  type: 'password',
  name: 'repeat-password',
  placeholder: 'Пароль',
  required: 'required',
  pattern: '^(?:(?=.*\\d)(?=.*[A-Z]).*)$',
  maxLength: 20,
  minLength: 3,
  error: 'Должен совпадать с паролем',
  className: 'input',
  events: {
    focus: (event: Event): void => validateInput(event.target!),
    blur: (event: Event): void => validateInput(event.target!),
  },
};

export default inputRepeatPasswordProps;
