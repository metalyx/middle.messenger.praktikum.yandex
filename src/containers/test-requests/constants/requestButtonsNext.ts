import HTTPTransport from '../../../core/http-transport/HTTPTransport';
import { testRequestPage } from '../TestRequests';

const http = new HTTPTransport();

const FAKE_DATA_URL = 'https://jsonplaceholder.typicode.com';

const MOCK_POST_REQUEST = [
  {
    id: 1,
    title: 'Title 1',
    position: 'center',
    amount: 15,
    values: [1, 2, 3, 4, 5],
  },
  {
    id: 2,
    title: 'Title 2',
    position: 'left',
    amount: 1,
    values: [1, 2, 3, 4, 5],
  },
  {
    id: 3,
    title: 'Title 3',
    position: 'right',
    amount: 132,
    values: [1, 2, 3, 4, 5],
  },
];

const requestsButtonsNext = [
  {
    text: 'ZZZZZZZZZZZZZZZZ',
    events: {
      click: () => {
        http.get(`${FAKE_DATA_URL}/users`).then((res) => {
          console.log(`Status Code: ${res.status}`);
          console.log(JSON.parse(res.response));
        });
      },
    },
  },
  {
    text: 'ZZZZZZZddddddddddddddddZ',
    events: {
      click: () => {
        http.post(`${FAKE_DATA_URL}/posts`, { data: MOCK_POST_REQUEST }).then((res) => {
          console.log(`Status Code: ${res.status}`);
          console.log(JSON.parse(res.response));
        });
      },
    },
  },
  {
    text: 'dsfsdfsdfsf',
    events: {
      click: () => {
        http.put(`${FAKE_DATA_URL}/posts/1`, { data: MOCK_POST_REQUEST }).then((res) => {
          console.log(`Status Code: ${res.status}`);
          console.log(JSON.parse(res.response));
        });
      },
    },
  },
  {
    text: 'sssssssssssssssssssss',
    events: {
      click: () => {
        http.patch(`${FAKE_DATA_URL}/posts/1`).then((res) => {
          console.log(`Status Code: ${res.status}`);
          console.log(JSON.parse(res.response));
        });
      },
    },
  },
  {
    text: 'llllllllllllllllllllllll',
    events: {
      click: () => {
        http.delete(`${FAKE_DATA_URL}/posts/1`).then((res) => {
          console.log(`Status Code: ${res.status}`);
          console.log(JSON.parse(res.response));
        });
      },
    },
  },
];

export default requestsButtonsNext;
