export class AppHelper {
  private static isDev = import.meta.env.DEV;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private static log(message: string, ...optionalParams: any[]) {
    if (AppHelper.isDev) {
      console.log(message, ...optionalParams);
    }
  }

  private static getPrefixedKey(name: string): string {
    return `app:${name}`;
  }

  static emit<D>(name: string, detail?: D) {
    AppHelper.log(`[DEV] Emitting event: ${name}`, detail);
    window.dispatchEvent(new CustomEvent(name, { detail }));
  }

  static on<D>(name: string, handler: (event: CustomEvent<D>) => void) {
    AppHelper.log(`[DEV] Adding event listener: ${name}`);
    window.addEventListener(name, handler as EventListener);
  }

  static off<D>(name: string, handler: (event: CustomEvent<D>) => void) {
    AppHelper.log(`[DEV] Removing event listener: ${name}`);
    window.removeEventListener(name, handler as EventListener);
  }

  static once<D>(name: string, handler: (event: CustomEvent<D>) => void) {
    AppHelper.log(`[DEV] Adding one-time event listener: ${name}`);
    const onceHandler = (event: CustomEvent<D>) => {
      handler(event);
      AppHelper.off(name, onceHandler);
    };
    AppHelper.on(name, onceHandler);
  }

  static persist<T>(name: string, value: T) {
    const prefixedName = AppHelper.getPrefixedKey(name);
    AppHelper.log(`[DEV] Persisting data: ${prefixedName}`, value);
    localStorage.setItem(prefixedName, JSON.stringify({ value }));
  }

  static retrieve<T>(name: string, defaultValue: T | null = null): T | null {
    const prefixedName = AppHelper.getPrefixedKey(name);
    AppHelper.log(`[DEV] Retrieving data: ${prefixedName}`);
    const item = localStorage.getItem(prefixedName);
    const parsed = item ? JSON.parse(item) : { value: defaultValue };
    const value = parsed.value;
    AppHelper.log(`[DEV] Retrieved data: ${prefixedName}`, value);
    return value;
  }

  static remove(name: string) {
    const prefixedName = AppHelper.getPrefixedKey(name);
    AppHelper.log(`[DEV] Removing data: ${prefixedName}`);
    localStorage.removeItem(prefixedName);
  }

  static clear() {
    AppHelper.log(`[DEV] Clearing all data from localStorage`);
    localStorage.clear();
  }
}
