import Login from './Login';

const LoginProps = {
  inputs: [
    {
      type: 'text', placeholder: 'Логин', name: 'login', id: 'login', className: 'input',
    },
    {
      type: 'password', placeholder: 'Пароль', name: 'password', id: 'password', className: 'input',
    },
  ],
};

const LoginPropsNew = {
  inputs: [
    {
      type: 'text', placeholder: 'Логин', name: 'login', id: 'login', className: 'input_disable',
    },
    {
      type: 'password', placeholder: 'Пароль', name: 'password', id: 'password', className: 'input_disable',
    },
  ],
};

const compiledLogin = new Login(LoginProps);

document.querySelector('#app').innerHTML = compiledLogin.render();
compiledLogin.setProps(LoginPropsNew);
