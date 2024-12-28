import { ref, onMounted, onUnmounted } from "vue";

export type ElementType = HTMLElement | Window;
export type CustomEventListener = (event: CustomEvent) => void;

export function useEventListener(
  eventType: string,
  handler: EventListener | CustomEventListener,
  element: ElementType = window,
) {
  const savedHandler = ref(handler);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const eventListener = (event: any) => {
    if (savedHandler.value) savedHandler.value(event);
  };

  onMounted(() => {
    element.addEventListener(eventType, eventListener);
  });

  onUnmounted(() => {
    element.removeEventListener(eventType, eventListener);
  });
}
