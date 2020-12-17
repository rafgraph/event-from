import { deviceType, primaryInput, supportsPassiveEvents } from 'detect-it';

export type EventFrom = 'mouse' | 'touch' | 'key';

let recentEventFrom: EventFrom = primaryInput;
let recentTouch = false;
let recentFocusFrom: EventFrom = recentEventFrom;
let recentWindowFocus = false;

// if detect-it believes the deviceType is touchOnly then it is
// highly unlikely that there is a mouse (but not impossible),
// so wait extra long for mouse events after touch input before attributing them to mouse input
const recentTouchEventTimerMultiple = deviceType === 'touchOnly' ? 3 : 1;

// To determine if there was a recentTouch event
// use setTimeout instead of a Date.now() comparison because
// in the case of a long running/blocking process from a touch event,
// the browser will push the corresponding mouse event (created by the touch interaction)
// onto the callback queue at the time it should be executed,
// and then push the timeout function onto the queue after the timer expires,
// even if the the main thread is still blocked (because the browser is multi-threaded).
// This results in the mouse event being moved to the callstack and called
// before the timeout function so recentTouch is still true
// regardless of how many Date.now() seconds have gone by.
// Also, if subsequent touch events occur while the blocking process is running,
// the browser will push the touch events onto the queue when the touch happens,
// and if one of them is in queue before the previous touch event's timer expires,
// it will be called before the timeout's function (so it can reset the timer),
// and, this is the key part, if the previous timer has finished and it's callback is added to the queue,
// the call to clearTimeout(recentTouchTimeoutId) will remove the timeout's function from the callback queue.
let recentTouchTimeoutId: number | undefined;
const setRecentTouchTimeout = (delay: number) => {
  if (recentTouchTimeoutId !== undefined) {
    window.clearTimeout(recentTouchTimeoutId);
  }
  recentTouchTimeoutId = window.setTimeout(() => {
    recentTouch = false;
    recentTouchTimeoutId = undefined;
  }, delay * recentTouchEventTimerMultiple);
};
const setRecentTouch = (delay: number) => () => {
  recentTouch = true;
  recentEventFrom = 'touch';
  setRecentTouchTimeout(delay);
};

const handlePointerEvent = (touchDelay: number) => (e: PointerEvent) => {
  switch (e.pointerType) {
    case 'mouse':
      recentEventFrom = 'mouse';
      break;
    case 'pen':
    case 'touch':
      setRecentTouch(touchDelay)();
      break;
  }
};

const handleMouseEvent = () => {
  if (recentTouch) return;
  recentEventFrom = 'mouse';
};

const handleKeyEvent = () => {
  recentEventFrom = 'key';
};

const handleDocumentFocusEvent = () => {
  if (!recentWindowFocus) {
    recentFocusFrom = recentEventFrom;
  }
};

let recentWindowFocusTimeoutId: number | undefined;
const setRecentWindowFocusTimeout = () => {
  if (recentWindowFocusTimeoutId !== undefined) {
    window.clearTimeout(recentWindowFocusTimeoutId);
  }
  recentWindowFocusTimeoutId = window.setTimeout(() => {
    recentWindowFocus = false;
    recentWindowFocusTimeoutId = undefined;
  }, 300);
};

const listenerOptions = supportsPassiveEvents
  ? { capture: true, passive: true }
  : true;

const documentListeners = [
  ['touchstart', setRecentTouch(750)],
  ['touchend', setRecentTouch(300)],
  ['touchcancel', setRecentTouch(300)],
  ['pointerover', handlePointerEvent(300)],
  ['pointerenter', handlePointerEvent(300)],
  ['pointerdown', handlePointerEvent(750)],
  ['pointerout', handlePointerEvent(300)],
  ['pointerleave', handlePointerEvent(300)],
  ['pointerup', handlePointerEvent(300)],
  ['mouseenter', handleMouseEvent],
  ['mousedown', handleMouseEvent],
  ['mouseleave', handleMouseEvent],
  ['mouseup', handleMouseEvent],
  ['keydown', handleKeyEvent],
  ['keyup', handleKeyEvent],
  ['focus', handleDocumentFocusEvent],
];

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  documentListeners.forEach(([eventName, eventHandler]) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore not sure how to get TS to match the handler type to the specific eventName
    document.addEventListener(eventName, eventHandler, listenerOptions);
  });

  window.addEventListener(
    'focus',
    (e) => {
      if (e.target === window || e.target === document) {
        recentWindowFocus = true;
        setRecentWindowFocusTimeout();
      }
    },
    listenerOptions,
  );
}

interface EventFromFunction {
  (
    // use any instead of unknown b/c unknown causes type error when passing a react synthetic event
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    event: { [key: string]: any },
  ): EventFrom;
}

export const eventFrom: EventFromFunction = (event) => {
  // use the incoming event to help determine recentEventFrom
  // in the same manner as the document event listeners
  // this helps catch edge cases especially when a move event is passed to eventFrom
  // because move event listeners are not set by Event From
  switch (event.pointerType) {
    case 'mouse':
      recentEventFrom = 'mouse';
      break;
    case 'pen':
    case 'touch':
      if (!recentTouch) {
        setRecentTouchTimeout(300);
        recentTouch = true;
      }
      recentEventFrom = 'touch';
      break;
  }

  if (/mouse/.test(event.type) && !recentTouch) {
    recentEventFrom = 'mouse';
  }

  if (/touch/.test(event.type)) {
    if (!recentTouch) {
      setRecentTouchTimeout(300);
      recentTouch = true;
    }
    recentEventFrom = 'touch';
  }

  if (/focus/.test(event.type)) {
    return recentFocusFrom;
  }

  return recentEventFrom;
};

// note that edge cases exist for scroll and wheel events where eventFrom will return the wrong input,
// to fix this, event-from would need to set a 'wheel' event listener on the document (see below),
// but decided not to add it because 'wheel' is a high frequency event (like move events)
// and don't currently have a use case for eventFrom(scrollEvent)
// to add support:
//   document.addEventListener(
//     'wheel',
//     () => {
//       // might need to track wheel event separately and use it just for eventFrom(scroll)
//       // because the wheel event is elastic, it continues to fire after the user interaction has finished
//       recentEventFrom = 'mouse';
//     },
//     listenerOptions,
//   );
