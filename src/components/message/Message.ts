import { Block, IProps } from '../../core/block/Block';

import templateMessage from './Message.pug';

class Message extends Block {
  constructor(props: IProps) {
    super('div', { ...props });
  }

  render(): HTMLElement {
    return this.compile(templateMessage, this.props);
  }
}

export default Message;
