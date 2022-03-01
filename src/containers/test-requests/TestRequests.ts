import DivWithEvents from '../../components/div-with-events/DivWithEvents';
import { Block, IProps } from '../../core/block/Block';
import requestsButtons from './constants/requestButtonsProps';
import testRequestsTemplate from './TestRequests.pug';
import './TestRequests.scss';

const app: HTMLElement | null = document.getElementById('app');
class TestRequests extends Block {
  constructor(props: IProps) {
    super('div', { ...props });
  }

  render(): DocumentFragment {
    return this.compile(testRequestsTemplate, this.props);
  }
}

const buttonList = requestsButtons.map((button) => new DivWithEvents(button));

// eslint-disable-next-line import/prefer-default-export
export const testRequestPage = new TestRequests({
  childrenList: buttonList,
  text: '',
});

if (app !== null) {
  app.innerHTML = '';
  app.appendChild(testRequestPage.getContent());
}

/* Важно */
// setTimeout(() => {
//   for (let i = 0; i < buttonList.length; i++) {
//     buttonList[i].setProps(requestsButtonsNext[i]);
//   }
// }, 2000);
