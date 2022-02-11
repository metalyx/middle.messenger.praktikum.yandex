import Button from '../../components/button/Button';
import FormChangePasswords from '../../components/form-change-passwords/FormChangePasswords';
import Input from '../../components/input/Input';
import { Block, IProps } from '../../core/block/Block';
import changePasswordsTemplate from './ChangePasswords.pug';
import INPUT_REPEAT_PASSWORD_PROPS from '../../utils/global-constants/input-repeat-password-props';
import INPUT_PASSWORD_PROPS from '../../utils/global-constants/input-password-props';
import SAVE_BUTTON_PROPS from './constants/saveButtonProps';

import './ChangePasswords.scss';
import '../profile/Profile.scss';
import { submitForm } from '../../utils/helpers/validate';

class ChangePasswords extends Block {
  constructor(props: IProps) {
    super('div', { ...props });
  }

  render(): DocumentFragment {
    return this.compile(changePasswordsTemplate, this.props);
  }
}

const formChangePasswordPorps = {
  formId: 'change-password',
  formName: 'change-password',
  password: new Input(INPUT_PASSWORD_PROPS),
  repeatPassword: new Input({
    ...INPUT_REPEAT_PASSWORD_PROPS, placeholder: 'Повторите пароль', id: 'repeat-password', name: 'repeat-password',
  }),
  saveButton: new Button(SAVE_BUTTON_PROPS),
  events: {
    submit: (e: Event) => submitForm(e),
  },
};

const pageProps = {
  displayName: 'Имя',
  changePasswordForm: new FormChangePasswords(formChangePasswordPorps),
};

const changePasswordsPage = new ChangePasswords(pageProps);

const app: HTMLElement | null = document.getElementById('app');
if (app !== null) {
  app.innerHTML = '';
  app.appendChild(changePasswordsPage.getContent());
}
