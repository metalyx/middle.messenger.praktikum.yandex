import IDialog from '../interfaces/dialog';
import IMessage from '../interfaces/message';

const sanyaMessages: IMessage[] = [
  {
    text: 'Text1',
    time: '10:44',
  },
  {
    text: 'Text2',
    time: '10:44',
  },
];

const steveJobsMessages: IMessage[] = [
  {
    text: 'Привет',
    time: '10:44',
  },
  {
    text: 'Привет, Стив!',
    time: '10:45',
    userMessage: true,
  },
  {
    text: 'Как дела у тебя?',
    time: '10:47',
  },
  {
    text: 'Да всё чики-бамбони, сам как?',
    time: '10:47',
    userMessage: true,
  },
  {
    text: 'Лучше не бывает)',
    time: '10:47',
  },
  {
    text: 'Хочу сделать тебе подарок)))0)0)))',
    time: '10:48',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Steve_Jobs_Headshot_2010-CROP.jpg',
    time: '10:48',
  },
];

const dialogListProps: IDialog[] = [
  {
    id: 1,
    name: 'Steve Jobs',
    src: 'https://www.tadviser.ru/images/thumb/5/5f/Steve-jobs.jpg/250px-Steve-jobs.jpg',
    messageLastTime: '10:47',
    amount: 0,
    message: 'Изображение',
    active: true,
    messagesList: steveJobsMessages,
  },
  {
    id: 2,
    name: 'Саня',
    src: 'https://tgram.ru/img/logo.jpg',
    messageLastTime: '13:12',
    amount: 0,
    message: 'Привет Санек',
    active: false,
    messagesList: sanyaMessages,
  },
  {
    id: 3,
    name: 'Гоша',
    messageLastTime: '11:12',
    amount: 0,
    message: 'Привет Гошан',
    active: false,
    messagesList: [],
  },
  {
    id: 4,
    name: 'Коля',
    messageLastTime: '12:42',
    amount: 0,
    message: 'Привет Колян',
    active: false,
    messagesList: [],
  },
  {
    id: 5,
    name: 'Коля',
    messageLastTime: '12:42',
    amount: 0,
    message: 'Привет Колян',
    active: false,
    messagesList: [],
  },
];

export default dialogListProps;
