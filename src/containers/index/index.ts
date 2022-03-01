import IndexPage from './IndexPage';
import Anchor from '../../components/anchors/Anchor';

const ANCHORS_DATA = [
  {
    href: 'signin.html',
    text: 'Login page',
    className: '',
  },
  {
    href: 'registration.html',
    text: 'Registration page',
    className: '',
  },
  {
    href: 'main.html',
    text: 'Chat page',
    className: '',
  },
  {
    href: 'profile.html',
    text: 'Profile page',
    className: '',
  },
  {
    href: 'notfound.html',
    text: '404 page',
    className: '',
  },
  {
    href: 'errorpage.html',
    text: '5** page',
    className: '',
  },
  {
    href: 'changepassword.html',
    text: 'Change password',
    className: '',
  },
  {
    href: 'requests.html',
    text: 'Test HTTP Transport',
    className: '',
  },
];

const signIn = new IndexPage({
  childrenList: ANCHORS_DATA.map((anchor) => new Anchor(anchor)),
});

const app: HTMLElement | null = document.getElementById('app');
if (app !== null) {
  app.innerHTML = '';
  app.appendChild(signIn.getContent());
}
