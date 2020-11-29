interface UnknownUIEvent extends UIEvent {
  [key: string]: unknown;
}

interface EventFrom {
  (
    event:
      | UIEvent
      | PointerEvent
      | MouseEvent
      | TouchEvent
      | KeyboardEvent
      | FocusEvent
      | WheelEvent
      | DragEvent
      | UnknownUIEvent,
  ): 'mouse' | 'touch' | 'key';
}

export const eventFrom: EventFrom = (event) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('eventFrom received:', event);
  }
  // TODO
  return 'mouse';
};
