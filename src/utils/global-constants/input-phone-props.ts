import { validateInput } from '../helpers/validate';

const inputPhoneProps = {
  id: 'phone',
  type: 'text',
  name: 'phone',
  placeholder: 'Телефон',
  required: 'required',
  pattern: '^[+]?[0-9]*$',
  maxLength: 15,
  minLength: 10,
  className: 'input',
  error: 'От 10 до 15 цифр, может начинаться со знака \'+\'',
  events: {
    focus: (event: Event): void => validateInput(event.target!),
    blur: (event: Event): void => validateInput(event.target!),
  },
};

export default inputPhoneProps;
