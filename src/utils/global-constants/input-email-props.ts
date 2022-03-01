import { validateInput } from '../helpers/validate';

const inputEmailProps = {
  id: 'email',
  type: 'email',
  name: 'email',
  placeholder: 'E-mail',
  required: 'required',
  pattern: '^[A-Za-z0-9_\\/^#&+-]+@[A-Za-z0-9_\\/^#&+-]+\\.+[A-Za-z]+$',
  className: 'input',
  error: 'Проверьте корректность введённого E-mail',
  events: {
    focus: (event: Event): void => validateInput(event.target!),
    blur: (event: Event): void => validateInput(event.target!),
  },
};

export default inputEmailProps;
