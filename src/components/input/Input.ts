import { Block, IProps } from '../../core/block/Block';
import template from './input.pug';

class Input extends Block {
  constructor(props: IProps) {
    super('div', { ...props });
  }

  render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}

export default Input;
