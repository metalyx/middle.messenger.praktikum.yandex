import { Block, IProps } from '../../core/block/Block';

import Anchor from '../../components/anchors/Anchor';
import Button from '../../components/button/Button';
import FormLogin from '../../components/form-login/FormLogin';
import Input from '../../components/input/Input';
import signInPageTemplate from './SignIn.pug';

import LOGIN_BUTTON_PROPS from './constants/loginButtonProps';
import NO_PROFILE_ANCHOR_PROPS from './constants/noProfileAnchorProps';
import FORM_PROPS from './constants/formProps';

import LOGIN_INPUT_PROPS from '../../utils/global-constants/input-login-props';
import PASSWORD_INPUT_PROPS from '../../utils/global-constants/input-password-props';

import './SignIn.scss';

const loginIput = new Input(LOGIN_INPUT_PROPS);
const passwordInput = new Input(PASSWORD_INPUT_PROPS);
const loginButton = new Button(LOGIN_BUTTON_PROPS);
const noProfileAnchor = new Anchor(NO_PROFILE_ANCHOR_PROPS);

class SignIn extends Block {
  constructor(props: IProps) {
    super('div', { ...props });
  }

  render(): HTMLElement {
    return this.compile(signInPageTemplate, this.props);
  }
}

const formLogin = new FormLogin({
  ...FORM_PROPS,
  loginIput,
  passwordInput,
  loginButton,
  noProfileAnchor,
});

const signInPage = new SignIn({ title: 'Авторизация', form: formLogin });

const app: HTMLElement | null = document.getElementById('app');
if (app !== null) {
  app.innerHTML = '';
  app.appendChild(signInPage.render());
}
