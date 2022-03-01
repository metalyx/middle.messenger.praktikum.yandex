import { Block, IProps } from '../../core/block/Block';

import templateListItem from './ListItem.pug';

class ListItem extends Block {
  constructor(props: IProps) {
    super('div', { ...props });
  }

  render(): DocumentFragment {
    return this.compile(templateListItem, this.props);
  }
}

export default ListItem;
