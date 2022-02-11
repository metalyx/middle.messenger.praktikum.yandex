import { Block, IProps } from '../../core/block/Block';

import templateNoMessages from './NoMessages.pug';

class NoMessages extends Block {
  constructor(props: IProps) {
    super('div', { ...props });
  }

  render(): HTMLElement {
    return this.compile(templateNoMessages, this.props);
  }
}

export default NoMessages;
