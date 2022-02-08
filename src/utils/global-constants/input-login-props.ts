import { validateInput } from '../helpers/validate';

const inputLoginProps = {
  id: 'login',
  type: 'text',
  name: 'login',
  placeholder: 'Логин',
  required: 'required',
  pattern: '^\\d*[a-zA-Z][a-zA-Z0-9]*$',
  maxLength: 20,
  minLength: 3,
  className: 'input',
  error: 'От 3 до 20 символов, только латиница и цифры, без спец. символов',
  events: {
    focus: (event: Event): void => validateInput(event.target!),
    blur: (event: Event): void => validateInput(event.target!),
  },
};

export default inputLoginProps;
