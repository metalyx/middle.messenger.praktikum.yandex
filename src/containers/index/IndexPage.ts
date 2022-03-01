import { Block, IProps } from '../../core/block/Block';
import './index.scss';
import indexTemplate from './index.pug';

class IndexPage extends Block {
  constructor(props: IProps) {
    super('div', props);
  }

  public render(): DocumentFragment {
    return this.compile(indexTemplate, this.props);
  }
}

export default IndexPage;
