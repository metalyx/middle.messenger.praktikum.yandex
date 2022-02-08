import Block from '../../core/alienBlock/Block';
import compileTemplate from './login.pug';
import Input from '../../components/input/Input';

import '../../styles/variables/all.scss';
import './login.scss';

export default class Login extends Block {
  constructor(props: object) {
    super('div', { ...props });
  }

  render() {
    const inputs = this.props.inputs.map((i) => new Input(i));
    const renderedInputs = inputs.map((i) => i.render());

    console.log(renderedInputs);
    const template = compileTemplate({ inputs: renderedInputs });

    return template;
  }
}
