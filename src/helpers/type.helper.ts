export class TypeHelper {
  static isString(value: unknown): value is string {
    return typeof value === "string";
  }

  static isNumber(value: unknown): value is number {
    return typeof value === "number";
  }

  static isBoolean(value: unknown): value is boolean {
    return typeof value === "boolean";
  }

  static isArray(value: unknown): value is unknown[] {
    return Array.isArray(value);
  }

  static isObject(value: unknown): value is object {
    return value !== null && typeof value === "object" && !Array.isArray(value);
  }

  static isFunction(value: unknown): value is typeof Function {
    return typeof value === "function";
  }

  static isUndefined(value: unknown): value is undefined {
    return typeof value === "undefined";
  }

  static isNull(value: unknown): value is null {
    return value === null;
  }

  static isDate(value: unknown): value is Date {
    return value instanceof Date;
  }

  static isJson(value: unknown): value is string {
    try {
      JSON.parse(value as string);
      return true;
    } catch {
      return false;
    }
  }

  static isPromise(value: unknown): value is Promise<unknown> {
    return value instanceof Promise;
  }

  static isElement(value: unknown): value is Element {
    return value instanceof Element;
  }

  static isHTMLElement(value: unknown): value is HTMLElement {
    return value instanceof HTMLElement;
  }

  static isWindow(value: unknown): value is Window {
    return value instanceof Window;
  }

  static isDocument(value: unknown): value is Document {
    return value instanceof Document;
  }

  static isNodeList(value: unknown): value is NodeList {
    return value instanceof NodeList;
  }

  static isEvent(value: unknown): value is Event {
    return value instanceof Event;
  }

  static isCustomEvent(value: unknown): value is CustomEvent {
    return value instanceof CustomEvent;
  }

  static isKeyboardEvent(value: unknown): value is KeyboardEvent {
    return value instanceof KeyboardEvent;
  }

  static isMouseEvent(value: unknown): value is MouseEvent {
    return value instanceof MouseEvent;
  }

  static isTouchEvent(value: unknown): value is TouchEvent {
    return value instanceof TouchEvent;
  }

  static isClipboardEvent(value: unknown): value is ClipboardEvent {
    return value instanceof ClipboardEvent;
  }

  static isFocusEvent(value: unknown): value is FocusEvent {
    return value instanceof FocusEvent;
  }

  static isInputEvent(value: unknown): value is InputEvent {
    return value instanceof InputEvent;
  }

  static isUIEvent(value: unknown): value is UIEvent {
    return value instanceof UIEvent;
  }

  static isWheelEvent(value: unknown): value is WheelEvent {
    return value instanceof WheelEvent;
  }

  static isAnimationEvent(value: unknown): value is AnimationEvent {
    return value instanceof AnimationEvent;
  }

  static isTransitionEvent(value: unknown): value is TransitionEvent {
    return value instanceof TransitionEvent;
  }

  static isPointerEvent(value: unknown): value is PointerEvent {
    return value instanceof PointerEvent;
  }

  static generateRandomString(length = 8) {
    return Math.random()
      .toString(36)
      .substring(2, 2 + length);
  }

  static generateRandomNumber(min = 0, max = 100) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  static generateRandomBoolean() {
    return Math.random() < 0.5;
  }

  static generateRandomArray(length = 8) {
    return Array.from({ length }, (_, index) => index);
  }

  static generateRandomObject(length = 8) {
    return Array.from({ length }, () => Math.random()).reduce(
      (acc, cur) => ({ ...acc, [this.generateRandomString()]: cur }),
      {},
    );
  }

  static generateRandomJson(length = 8) {
    return JSON.stringify(this.generateRandomObject(length));
  }
}
