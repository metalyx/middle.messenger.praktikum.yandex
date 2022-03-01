import { Block, IProps } from '../../core/block/Block';
import formTemplate from './form.pug';

class FormProfile extends Block {
  constructor(props: IProps) {
    super('div', { ...props });
  }

  render(): DocumentFragment {
    return this.compile(formTemplate, this.props);
  }
}

export default FormProfile;
