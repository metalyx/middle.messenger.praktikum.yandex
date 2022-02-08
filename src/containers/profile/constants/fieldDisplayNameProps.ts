import { validateInput } from "../../../utils/helpers/validate";

const FIELD_DISPLAY_NAME_PROPS = {
  id: 'display_name',
  type: 'text',
  name: 'display_name',
  placeholder: 'Имя в чате',
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

export default FIELD_DISPLAY_NAME_PROPS;
