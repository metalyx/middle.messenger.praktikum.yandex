import { validateInput } from '../helpers/validate';

const inputSurnameProps = {
  id: 'second_name',
  type: 'text',
  name: 'second_name',
  placeholder: 'Фамилия',
  required: 'required',
  pattern: '^[A-Z][a-z-]*$|^[А-я][а-я-]*$',
  className: 'input',
  // eslint-disable-next-line max-len
  error: 'Латинские / кириллические символы, без пробелов, спец. символов и цифр. Первый символ в верхнем регистре',
  events: {
    focus: (event: Event): void => validateInput(event.target!),
    blur: (event: Event): void => validateInput(event.target!),
  },
};

export default inputSurnameProps;
