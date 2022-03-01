type ListenerFunc = (...args: any) => void;

type IListener = Record<string, ListenerFunc[]>

class EventBus {
  listeners: IListener;

  constructor() {
    this.listeners = {};
  }

  on(event: string, callback: ListenerFunc) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: string, callback: ListenerFunc) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter(
      (listener: ListenerFunc) => listener !== callback,
    );
  }

  emit(event: string, ...args: any) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event].forEach((listener: ListenerFunc) => {
      listener(...args);
    });
  }
}

export default EventBus;
