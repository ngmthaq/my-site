export class AppHelper {
  static emit<D>(name: string, detail?: D) {
    window.dispatchEvent(new CustomEvent(name, { detail }));
  }

  static on<D>(name: string, handler: (event: CustomEvent<D>) => void) {
    window.addEventListener(name, handler as EventListener);
  }

  static off<D>(name: string, handler: (event: CustomEvent<D>) => void) {
    window.removeEventListener(name, handler as EventListener);
  }

  static once<D>(name: string, handler: (event: CustomEvent<D>) => void) {
    const onceHandler = (event: CustomEvent<D>) => {
      handler(event);
      AppHelper.off(name, onceHandler);
    };
    AppHelper.on(name, onceHandler);
  }

  static persist(name: string, value: unknown) {
    localStorage.setItem(name, JSON.stringify(value));
  }

  static retrieve<T>(name: string, defaultValue: T | null = null): T | null {
    const item = localStorage.getItem(name);
    return item ? JSON.parse(item) : defaultValue;
  }

  static remove(name: string) {
    localStorage.removeItem(name);
  }

  static clear() {
    localStorage.clear();
  }
}
