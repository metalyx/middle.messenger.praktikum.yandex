import { Block, IProps } from '../../core/block/Block';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import Anchor from '../../components/anchors/Anchor';
import FormRegistration from '../../components/form-registration/FormRegistration';
import registrationTemplate from './Registration.pug';

import REGISTRATION_PROPS from './constants/registrationProps';
import ANCHOR_LOGIN_PROPS from './constants/anchorLoginProps';
import BUTTON_REGISTER_PROPS from './constants/buttonRegisterProps';
import REGISTRATION_FORM_PROPS from './constants/registrationFormProps';

import INPUT_LOGIN_PROPS from '../../utils/global-constants/input-login-props';
import INPUT_MAIL_PROPS from '../../utils/global-constants/input-email-props';
import INPUT_PASSWORD_PROPS from '../../utils/global-constants/input-password-props';
import INPUT_NAME_PROPS from '../../utils/global-constants/input-name-props';
import INPUT_SURNAME_PROPS from '../../utils/global-constants/input-surname-props';
import INPUT_PHONE_PROPS from '../../utils/global-constants/input-phone-props';

import '../sign-in/SignIn.scss';
import './Registration.scss';

class Registration extends Block {
  constructor(props: IProps) {
    super('div', { ...props });
  }

  render(): HTMLElement {
    return this.compile(registrationTemplate, this.props);
  }
}

const registrationPage = new Registration({
  ...REGISTRATION_PROPS,
  form: new FormRegistration({
    ...REGISTRATION_FORM_PROPS,
    inputMail: new Input(INPUT_MAIL_PROPS),
    inputLogin: new Input(INPUT_LOGIN_PROPS),
    inputName: new Input(INPUT_NAME_PROPS),
    inputSurname: new Input(INPUT_SURNAME_PROPS),
    inputPhone: new Input(INPUT_PHONE_PROPS),
    inputPassword: new Input(INPUT_PASSWORD_PROPS),
    inputPasswordRepeat: new Input(INPUT_PASSWORD_PROPS),
    buttonRegister: new Button(BUTTON_REGISTER_PROPS),
    anchorLogin: new Anchor(ANCHOR_LOGIN_PROPS),
  }),
});

const app: HTMLElement | null = document.getElementById('app');
if (app !== null) {
  app.innerHTML = '';
  app.appendChild(registrationPage.render());
}
