import { Block, IProps } from '../../core/block/Block';
import formTemplate from './form.pug';

class FormRegistration extends Block {
  constructor(props: IProps) {
    super('div', { ...props });
  }

  render(): HTMLElement {
    return this.compile(formTemplate, this.props);
  }
}

export default FormRegistration;
