import { Block, IProps } from '../../../core/block/Block';

import templateDialogList from './DialogList.pug';

class DialogList extends Block {
  constructor(props: IProps) {
    super('div', { ...props });
  }

  render(): DocumentFragment {
    return this.compile(templateDialogList, this.props);
  }
}

export default DialogList;
