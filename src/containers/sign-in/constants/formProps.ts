import { submitForm } from '../../../utils/helpers/validate';

const FORM_PROPS = {
  formName: '2133423423',
  formId: '7',
  events: {
    submit: (event: Event) => submitForm(event),
  },
};

export default FORM_PROPS;
