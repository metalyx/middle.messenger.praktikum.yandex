import { POST_REGISTRATION, GET_USER_INFO } from '../../api/endpoints/auth';

const registratinButton = document.getElementById('submit-registration');

registratinButton.addEventListener('click', () => {
  const email = document.getElementById('email').value;
  const login = document.getElementById('login').value;
  const first_name = document.getElementById('first_name').value;
  const second_name = document.getElementById('second_name').value;
  const phone = document.getElementById('phone').value;
  const password = document.getElementById('password').value;
  const repeat_password = document.getElementById('repeat_password').value;

  // fetch(POST_REGISTRATION, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json;charset=utf-8'
  //   },
  //   body: JSON.stringify({
  //     email,
  //     login,
  //     first_name,
  //     second_name,
  //     phone,
  //     password
  //   })
  // });

  console.log(email, login, first_name, second_name, phone, password, repeat_password);

  
});
