import { Block, IProps } from '../../core/block/Block';

// template imports
import template from './input.pug';

// component
class Input extends Block {
  constructor(props: IProps) {
    super('div', { ...props });
  }

  render(): HTMLElement {
    return this.compile(template, this.props);
  }
}

export default Input;
