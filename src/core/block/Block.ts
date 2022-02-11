import { v4 as uuidv4 } from 'uuid';
import EventBus from '../event-bus/EventBus';

/* props schema */
export interface IProps {
  events?: { [key: string]: (event: Event) => void }
  childrenList?: Block[]
  classes?: string[]
  text?: string
  type?: string
  [index: string]: any
}

interface IChildrenSimple { [childName: string]: Block }
interface IChildrenList { childrenList?: Block[] }
type IChildren = IChildrenSimple & IChildrenList

export abstract class Block {
  /* class properties */
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  private _element!: HTMLElement;

  readonly _meta: { tagName: string, propsAndChildren: IProps };

  readonly _id: string;

  readonly props: IProps;

  readonly children: IChildren;

  readonly eventBus: () => EventBus;

  /* constructor */
  constructor(tagName = 'div', propsAndChildren: IProps) {
    const eventBus = new EventBus();
    this._meta = { tagName, propsAndChildren };
    this._id = uuidv4();
    this.props = this._makeIPropsProxy({ ...propsAndChildren, _id: this._id });
    const { children } = this._getChildren(propsAndChildren);
    this.children = children ?? {};
    this.eventBus = () => eventBus;
    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  /* getters */
  get element(): HTMLElement | undefined {
    return this._element;
  }

  /* private methods */
  private _getChildren(propsAndChildren: IProps): IProps {
    const children: IProps = {};
    const props: IProps = {};
    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else if (key === 'childrenList') {
        children[key] = [];

        value.forEach((v: Block) => (children[key]!.push(v)));
      } else {
        props[key] = value;
      }
    });

    return { children, props };
  }

  private _registerEvents(eventBus: EventBus): void {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  private _createResources(): void {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  private _init(): void {
    this._createResources();
    this.init();
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  private _componentDidMount(): void {
    this.componentDidMount();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);

    const { childrenList = [] as Block[], ...otherChildren } = this.children;

    Object.values(otherChildren).forEach((child) => {
      child.dispatchComponentDidMount();
    });

    childrenList.forEach((child: Block) => {
      child.dispatchComponentDidMount();
    });
  }

  private _componentDidUpdate(oldIProps: IProps, newIProps: IProps): void {
    const response = this.componentDidUpdate(oldIProps, newIProps);
    if (!response) {
      return;
    }
    this._render();
  }

  private _render(): void {
    // const block = this.render() as unknown as Element;

    // if (block !== undefined) {
    //   const tgt = document.querySelector(`[data-id="${this._element.getAttribute('data-id')!}"]`);
    //   if (tgt === null) {
    //     this._element.innerHTML = '';
    //     this._element.appendChild(block);
    //   } else {
    //     block.firstElementChild!.setAttribute('data-id', tgt.getAttribute('data-id')!);
    //     tgt.parentNode?.replaceChild(block, tgt);
    //   }
    //   this._addEvents(); // add new event handlers
    // }
    const fragment = this.render();

    this._removeEvents();
    this._element.innerHTML = '';

    this._element.appendChild(fragment);
    this._addEvents();
  }

  private _addEvents(): void {
    const { events = {} } = this.props;

    Object.entries(events).forEach(([eventName, evt]) => {
      const id = this._element.getAttribute('data-id');
      const tgt = document.querySelector(`[data-id="${id!}"]`);

      const target = tgt === null ? this._element.firstElementChild : tgt;

      target?.addEventListener(eventName, evt, true);
    });
  }

  private _removeEvents(): void {
    const { events = {} } = this.props;

    Object.entries(events).forEach(([eventName, evt]) => {
      this._element?.firstElementChild?.removeEventListener(eventName, evt);
    });
  }

  private _makeIPropsProxy(props: IProps): IProps {
    return new Proxy(props, {
      get(target, prop: string) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },

      set: (target, prop: string, value) => {
        // eslint-disable-next-line no-param-reassign
        target[prop] = value;
        return true;
      },

      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  }

  private _createDocumentElement(tagName: string): HTMLElement {
    const element = document.createElement(tagName);
    element.setAttribute('data-id', this._id);
    return element;
  }

  /* public methods */
  public render(): void { }

  public init(): void { }

  public componentDidMount(): void { }

  public dispatchComponentDidMount(): void {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  public getContent(): HTMLElement | undefined {
    return this.element;
  }

  public componentDidUpdate(oldProps: IProps, newProps: IProps): boolean {
    return true;
  }

  public setProps = (nextProps?: IProps): void => {
    // if (!nextProps) {
    //   return;
    // }

    // // 1 - remove old event handlers
    // this._removeEvents();
    // Object.assign(this.props, nextProps);
    // // this.eventBus().emit(Block.EVENTS.FLOW_CDU, this._meta.propsAndChildren, nextProps); // emit CDU
    // this.eventBus().emit(Block.EVENTS.FLOW_CDU, this._meta.propsAndChildren, nextProps); // emit CDU
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  public show(): void {
    this.getContent()!.style.display = 'block';
  }

  public hide(): void {
    this.getContent()!.style.display = 'none';
  }

  public compile(compileTemplate: any, props: IProps): HTMLTemplateElement {
    const propsAndStubs = { ...props };
    const { childrenList = [], ...otherChildren } = this.children;
    // ordinary children
    Object.entries(otherChildren).forEach(([key, child]: [string, Block]) => {
      propsAndStubs[key] = `<div data-id="${child._id}"></div>`;
    });

    // childrenList
    let res = '';
    let buffer: Block[] | undefined = [];
    if (childrenList.length > 0) {
      childrenList.forEach((child: Block) => {
        res += `<div data-id="${child._id}"></div>`;
      });

      buffer = propsAndStubs.childrenList;
      propsAndStubs.childrenList = res as unknown as Block[];
    }

    // compile template
    const fragment = this._createDocumentElement('template');
    fragment.innerHTML = compileTemplate(propsAndStubs);

    const replaceStub = (child: Block): void => {
      const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);
      const el = child?.getContent()?.firstElementChild;
      el?.setAttribute('data-id', child._id);
      stub?.replaceWith(el);
    };

    // replace stubs - ordinary children
    Object.values(otherChildren).forEach((child: Block) => replaceStub(child));

    // replace stubs - childrenlist
    buffer?.forEach((child: Block) => replaceStub(child));

    return fragment.content;
  }
}
