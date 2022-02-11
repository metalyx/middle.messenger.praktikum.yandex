import { Block, IProps } from '../../core/block/Block';

import templateDialog from './Dialog.pug';

class Dialog extends Block {
  constructor(props: IProps) {
    super('div', { ...props });
  }

  render(): DocumentFragment {
    return this.compile(templateDialog, this.props);
  }
}

export default Dialog;
