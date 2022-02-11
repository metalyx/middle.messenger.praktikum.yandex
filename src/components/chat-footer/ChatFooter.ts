import { Block, IProps } from '../../core/block/Block';

import chatFooterTemplate from './ChatFooter.pug';

class ChatFooter extends Block {
  constructor(props: IProps) {
    super('div', { ...props });
  }

  render(): HTMLElement {
    return this.compile(chatFooterTemplate, this.props);
  }
}

export default ChatFooter;
