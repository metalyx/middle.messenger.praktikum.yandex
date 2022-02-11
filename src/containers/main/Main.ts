import Anchor from '../../components/anchors/Anchor';
import ChatFooter from '../../components/chat-footer/ChatFooter';
import ChatHead from '../../components/chat-head/ChatHead';
import Dialog from '../../components/dialog/Dialog';
import DialogList from '../../components/dialog/dialogList/DialogList';
import DivWithEvents from '../../components/div-with-events/DivWithEvents';
import Input from '../../components/input/Input';
import Message from '../../components/message/Message';
import MessagesList from '../../components/messagesList/MessagesList';
import NoMessages from '../../components/no-messages/NoMessages';
import { Block, IProps } from '../../core/block/Block';
import dialogListProps from './constants/dialogListProps';
import inputMessageProps from './constants/inputMessageProps';
import sendButtonProps from './constants/sendButtonProps';
import mainTemplate from './Main.pug';

import './Main.scss';

class Main extends Block {
  constructor(props: IProps) {
    super('div', { ...props });
  }

  render(): HTMLElement {
    return this.compile(mainTemplate, this.props);
  }
}

const onClick = (id: number): void => {
  const newDialogListProps = dialogListProps.map(
    (dialog) => {
      if (dialog.id === id) {
        // eslint-disable-next-line no-param-reassign
        dialog.active = true;
        return dialog;
      }
      // eslint-disable-next-line no-param-reassign
      dialog.active = false;
      return dialog;
    },
  );
  const newMessageListProps = new MessagesList({
    childrenList: newDialogListProps.filter((dialog) => dialog.active)[0].messagesList.length !== 0
      ? newDialogListProps.filter((dialog) => dialog.active)[0].messagesList.map((message) => new Message(message))
      : [new NoMessages({})],
  });

  // eslint-disable-next-line no-use-before-define
  mainPage.setProps(
    {
      dialogs: new DialogList({
        childrenList: newDialogListProps.map((dialog) => new Dialog({ ...dialog, events: { click: () => onClick(dialog.id) } })),
      }),
      messagesList: newMessageListProps,
    },
  );
};

const mainPage: Main = new Main({
  profile: new Anchor({ href: 'profile.html', text: 'Профиль' }),
  dialogs: new DialogList({
    childrenList: dialogListProps.map((dialog) => new Dialog({ ...dialog, events: { click: () => onClick(dialog.id) } })),
  }),
  // eslint-disable-next-line max-len
  messagesList: new MessagesList({ childrenList: dialogListProps.filter((dialog) => dialog.active)[0].messagesList.length !== 0 ? dialogListProps.filter((dialog) => dialog.active)[0].messagesList.map((message) => new Message(message)) : [new NoMessages({})] }),
  chatHead: new ChatHead({ avatar: 'https://www.tadviser.ru/images/thumb/5/5f/Steve-jobs.jpg/250px-Steve-jobs.jpg', name: 'Steve Jobs' }),
  chatFooter: new ChatFooter({ inputMessage: new Input(inputMessageProps), sendMessage: new DivWithEvents(sendButtonProps) }),
});

const app: HTMLElement | null = document.getElementById('app');
if (app !== null) {
  app.innerHTML = '';
  app.appendChild(mainPage.render());
}
