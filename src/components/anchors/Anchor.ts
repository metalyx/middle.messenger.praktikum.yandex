import { Block, IProps } from '../../core/block/Block';
import anchorTemplate from './anchor.pug';

class Anchor extends Block {
  constructor(props: IProps) {
    super('div', props);
  }

  public render(): DocumentFragment {
    return this.compile(anchorTemplate, this.props);
  }
}

export default Anchor;
