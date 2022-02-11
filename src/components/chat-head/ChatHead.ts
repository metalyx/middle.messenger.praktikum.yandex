import { Block, IProps } from '../../core/block/Block';

import chatHeadTemplate from './ChatHead.pug';

class ChatHead extends Block {
  constructor(props: IProps) {
    super('div', { ...props });
  }

  render(): HTMLElement {
    return this.compile(chatHeadTemplate, this.props);
  }
}

export default ChatHead;
