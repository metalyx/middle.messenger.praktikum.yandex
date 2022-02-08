import { Block } from '../core/block/Block';

export default function render(query: string, block: Block) {
  const root = document.querySelector(query);

  // Можно завязаться на реализации вашего класса Block
  root.appendChild(block.getContent());

  // block.dispatchComponentDidMount();

  return root;
}
