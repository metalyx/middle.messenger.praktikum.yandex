import Anchor from '../../components/anchors/Anchor';
import { Block, IProps } from '../../core/block/Block';
import errorPageTemplate from './ErrorPage.pug';
import './ErrorPage.scss';

class ErrorPage extends Block {
  constructor(props: IProps) {
    super('div', { ...props });
  }

  render(): DocumentFragment {
    return this.compile(errorPageTemplate, this.props);
  }
}

const errorPage = new ErrorPage({
  returnToIndex: new Anchor({ href: 'index.html', text: 'Перейти на главную' }),
});

const app: HTMLElement | null = document.getElementById('app');
if (app !== null) {
  app.innerHTML = '';
  app.appendChild(errorPage.getContent());
}
