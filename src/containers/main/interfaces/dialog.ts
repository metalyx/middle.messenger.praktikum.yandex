import IMessage from './message';

interface IDialog {
  id: number;
  name: string;
  src?: string;
  messageLastTime: string | Date;
  amount: number;
  message?: string;
  active: boolean;
  messagesList: IMessage[];
}

export default IDialog;
