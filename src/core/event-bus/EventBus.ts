type listenerFunc = (...args: any) => void;

interface IListener {
  [key: string]: listenerFunc[];
}

class EventBus {
  listeners: IListener;

  constructor() {
    this.listeners = {};
  }

  on(event: string, callback: listenerFunc) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: string, callback: listenerFunc) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter(
      (listener: listenerFunc) => listener !== callback,
    );
  }

  emit(event: string, ...args: any) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event].forEach((listener: listenerFunc) => {
      listener(...args);
    });
  }
}

export default EventBus;
