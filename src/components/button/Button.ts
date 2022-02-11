import { Block } from '../../core/block/Block';
import buttonTemplate from './button.pug';

export default class Button extends Block {
  constructor(props: any) {
    super('button', props);
  }

  render(): DocumentFragment {
    return this.compile(buttonTemplate, this.props);
  }
}
