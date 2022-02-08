import { Block, IProps } from '../../core/block/Block';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import Anchor from '../../components/anchors/Anchor';
import profileTemplate from './Profile.pug';

import CHANGE_FIELD_PROPS from './constants/changeFieldsProps';
import CHANGE_PASSWORD_PROPS from './constants/changePasswordProps';
import FIELD_DISPLAY_NAME_PROPS from './constants/fieldDisplayNameProps';

import LOGOUT_PROPS from './constants/logoutProps';
import FORM_PROFILE_PROPS from './constants/formProfileProps';
import PROFILE_PROPS from './constants/profileProps';

import FIELD_EMAIL_PROPS from '../../utils/global-constants/input-email-props';
import FIELD_LOGIN_PROPS from '../../utils/global-constants/input-login-props';
import FIELD_NAME_PROPS from '../../utils/global-constants/input-name-props';
import FIELD_PHONE_PROPS from '../../utils/global-constants/input-phone-props';
import FIELD_SURNAME_PROPS from '../../utils/global-constants/input-surname-props';
import FIELD_PASSWORD_PROPS from '../../utils/global-constants/input-password-props';

import '../sign-in/SignIn.scss';
import './Registration.scss';
import FormRegistration from '../../components/form-registration/FormRegistration';
import FormProfile from '../../components/form-profile/formProfile';

class Profile extends Block {
  constructor(props: IProps) {
    super('div', { ...props });
  }

  render(): HTMLElement {
    return this.compile(profileTemplate, this.props);
  }
}

const profilePage = new Profile({
  ...PROFILE_PROPS,
  profileForm: new FormProfile({
    ...FORM_PROFILE_PROPS,
    fieldEmail: new Input(FIELD_EMAIL_PROPS),
    fieldLogin: new Input(FIELD_LOGIN_PROPS),
    fieldName: new Input(FIELD_NAME_PROPS),
    fieldSurname: new Input(FIELD_SURNAME_PROPS),
    fieldDisplayName: new Input(FIELD_PHONE_PROPS),
    fieldPhone: new Input(FIELD_PHONE_PROPS),
    changeFields: new Input(FIELD_PASSWORD_PROPS),
    changePassword: new Button(BUTTON_REGISTER_PROPS),
    logout: new Anchor(ANCHOR_LOGIN_PROPS),
  }),
});

const app: HTMLElement | null = document.getElementById('app');
if (app !== null) {
  app.innerHTML = '';
  app.appendChild(profilePage.render());
}
