import { validateInput } from '../helpers/validate';

const inputNameProps = {
  id: 'first_name',
  type: 'text',
  name: 'first_name',
  placeholder: 'Имя',
  required: 'required',
  pattern: '^[A-Z][a-z-]*$|^[А-я][а-я-]*$',
  className: 'input',
  // eslint-disable-next-line max-len
  error: 'Латинские / кириллические символы, первый символ в верхнем регистре, без спец. символов, цифр и пробелов',
  events: {
    focus: (event: Event): void => validateInput(event.target!),
    blur: (event: Event): void => validateInput(event.target!),
  },
};

export default inputNameProps;
