import Anchor from '../../components/anchors/Anchor';
import { Block, IProps } from '../../core/block/Block';
import notFoundTemplate from './NotFound.pug';
import './NotFound.scss';

class NotFound extends Block {
  constructor(props: IProps) {
    super('div', { ...props });
  }

  render(): HTMLElement {
    return this.compile(notFoundTemplate, this.props);
  }
}

const notFoundPage = new NotFound({
  returnToIndex: new Anchor({ href: 'index.html', text: 'Перейти на главную' }),
});

const app: HTMLElement | null = document.getElementById('app');
if (app !== null) {
  app.innerHTML = '';
  app.appendChild(notFoundPage.render());
}
