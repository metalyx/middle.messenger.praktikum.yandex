import CheckUserAthorised from '../src/utils/check-user-authorised/CheckUserAuthorised.js';
import Login from '../src/modules/login/Login.js';


// Выбираем целевой элемент
var root = document.getElementById('root');

// Конфигурация observer (за какими изменениями наблюдать)
const config = {
    attributes: true,
    childList: true,
    subtree: true
};

// Создаём экземпляр наблюдателя с указанной функцией колбэка
const observer = new MutationObserver(() => {
  document.getElementById('submit-login').addEventListener('click', () => {
    console.log('Login: ', document.getElementById('login').value);
    console.log('Password: ', document.getElementById('password').value);
  })
});

// Начинаем наблюдение за настроенными изменениями целевого элемента
observer.observe(root, config);

// Позже можно остановить наблюдение
// observer.disconnect();



let content;

if (CheckUserAthorised() === false) {
  content = Login();
}

if (content === undefined) {
  document.getElementById('root').innerHTML = 'Nothing to render';
} else {
  document.getElementById('root').innerHTML = content;
}
