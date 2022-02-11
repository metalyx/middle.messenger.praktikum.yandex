Ссылка на PULL REQUEST 1 sprint: https://github.com/metalyx/middle.messenger.praktikum.yandex/pull/4

## Описание

Этот репозиторий и код в нём - учебная проектная работа первого модуля Yandex Practicum. Представляет собой мессенджер.

**На данный момент** проект представляет из себя несколько страниц, генерируемых на клиенте. В качестве шаблонизатора - [PUG](https://pugjs.org/api/getting-started.html). 

Внедрены TypeScript, Eslint, Stylelint.

Посмотреть проект можно здесь: [Netlify](https://6206aa8644619b2a4b916a00--wonderful-mayer-44e72d.netlify.app/).

Использовался макет, предоставленный Яндексом: [Figma](https://www.figma.com/file/24EUnEHGEDNLdOcxg7ULwV/Chat?node-id=0%3A1).

## Установка

Установка всех зависимостей: `npm install`

Запуск локально (**без Express**): `npm run dev`.

Для создания сборки проекта: `npm run build`.

Запуск локально (**раздача Express статики**): `npm run start`.

## **Примеры использования**

Вы можете прокликать странички, позаполнять формы и посмотреть в консоль. В ней вы найдете данные формы(при прошедшей валидации).
Также в консоли можно убедиться в работоспособности класса HTTPTransport.
Переходы между страницами реализованы с помощью якорей.

Возврат на индексную страницу осуществляется кнопкой "назад" в браузере. Или вы можете стереть всё, кроме домена в адресной строке.🤷

### **Команда**

Автор: [Терещенко Виталий](https://vk.com/metalyx)
