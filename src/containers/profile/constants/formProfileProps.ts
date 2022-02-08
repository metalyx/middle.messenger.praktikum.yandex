import { submitForm } from '../../../utils/helpers/validate';

const FORM_PROFILE_PROPS = {
  formId: 'profile-form',
  formName: 'profile-form',
  events: {
    submit: (event: Event) => submitForm(event),
  },
};

export default FORM_PROFILE_PROPS;
