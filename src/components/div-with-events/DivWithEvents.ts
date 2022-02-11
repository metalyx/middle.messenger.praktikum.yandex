import { Block, IProps } from '../../core/block/Block';

import divTemplate from './Div.pug';

class DivWithEvents extends Block {
  constructor(props: IProps) {
    super('div', { ...props });
  }

  render(): DocumentFragment {
    return this.compile(divTemplate, this.props);
  }
}

export default DivWithEvents;
