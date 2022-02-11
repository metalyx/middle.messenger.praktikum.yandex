import { Block, IProps } from '../../core/block/Block';

import templateMessagesList from './MessagesList.pug';

class MessagesList extends Block {
  constructor(props: IProps) {
    super('div', { ...props });
  }

  render(): DocumentFragment {
    return this.compile(templateMessagesList, this.props);
  }
}

export default MessagesList;
