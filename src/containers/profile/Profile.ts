import { Block, IProps } from '../../core/block/Block';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import Anchor from '../../components/anchors/Anchor';
import profileTemplate from './Profile.pug';

import CHANGE_FIELD_PROPS from './constants/changeFieldsProps';
import FIELD_DISPLAY_NAME_PROPS from './constants/fieldDisplayNameProps';

import FORM_PROFILE_PROPS from './constants/formProfileProps';
import PROFILE_PROPS from './constants/profileProps';

import FIELD_EMAIL_PROPS from '../../utils/global-constants/input-email-props';
import FIELD_LOGIN_PROPS from '../../utils/global-constants/input-login-props';
import FIELD_NAME_PROPS from '../../utils/global-constants/input-name-props';
import FIELD_PHONE_PROPS from '../../utils/global-constants/input-phone-props';
import FIELD_SURNAME_PROPS from '../../utils/global-constants/input-surname-props';
import FIELD_PASSWORD_PROPS from '../../utils/global-constants/input-password-props';

import '../sign-in/SignIn.scss';
import './Profile.scss';
import FormRegistration from '../../components/form-registration/FormRegistration';
import FormProfile from '../../components/form-profile/formProfile';
import ListItem from '../../components/list-item/ListItem';
import logoutProps from './constants/logoutProps';
import changePasswordProps from './constants/changePasswordProps';

let isChangingPassword = false;
class Profile extends Block {
  constructor(props: IProps) {
    super('div', { ...props });
  }

  render(): HTMLElement {
    return this.compile(profileTemplate, this.props);
  }
}

const inputFactory = (props: any): Input => new Input({ ...props });

const anchorFactory = (props: any): Anchor => new Anchor({ ...props });

const changeFieldsButton = (text: string) => new Button({ type: 'submit', text, className: 'change-field-button' });
const changePasswordButton = (text: string) => new Button({
  type: 'submit',
  text,
  className: 'change-field-button',
  events: {
    click: () => {
      isChangingPassword = !isChangingPassword;
    },
  },
});

const profilePage = new Profile({
  ...PROFILE_PROPS,
  profileForm: new FormProfile({
    ...FORM_PROFILE_PROPS,
    fieldEmail: new ListItem({ classNameListItem: 'field-email', textSpan: 'Почта', input: inputFactory(FIELD_EMAIL_PROPS) }),
    fieldLogin: new ListItem({ classNameListItem: 'field-login', textSpan: 'Логин', input: inputFactory(FIELD_LOGIN_PROPS) }),
    fieldName: new ListItem({ classNameListItem: 'field-name', textSpan: 'Имя', input: inputFactory(FIELD_NAME_PROPS) }),
    fieldSurname: new ListItem({ classNameListItem: 'field-surname', textSpan: 'Фамилия', input: inputFactory(FIELD_SURNAME_PROPS) }),
    fieldDisplayName: new ListItem({
      classNameListItem: 'field-display-name',
      textSpan: 'Имя в чате',
      input: inputFactory(FIELD_DISPLAY_NAME_PROPS),
    }),
    fieldPhone: new ListItem({ classNameListItem: 'field-phone', textSpan: 'Телефон', input: inputFactory(FIELD_PHONE_PROPS) }),
    changeFields: new ListItem({
      classNameListItem: 'change-fields', classNameSpan: 'color-blue', textSpan: '', button: changeFieldsButton('Изменить данные'),
    }),
    changePassword: new ListItem({
      classNameListItem: 'change-password', classNameSpan: 'color-blue', textSpan: anchorFactory(changePasswordProps),
    }),
    logout: new ListItem({ classNameListItem: 'logout', classNameSpan: 'color-red', textSpan: anchorFactory(logoutProps) }),
  }),
});

const app: HTMLElement | null = document.getElementById('app');
if (app !== null) {
  app.innerHTML = '';
  app.appendChild(profilePage.render());
}
