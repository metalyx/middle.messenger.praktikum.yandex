import { submitForm } from '../../../utils/helpers/validate';

const REGISTRATION_FORM_PROPS = {
  formName: 'registration-form',
  formId: 'registration-form',
  events: {
    submit: (event: Event) => submitForm(event),
  },
};

export default REGISTRATION_FORM_PROPS;
