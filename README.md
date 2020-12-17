# Event From

Determine if a browser event was caused by `mouse`, `touch`, or `key` input. Can be used to:

- Ignore `mouse` events caused by `touch` input.
- Determine if `focus` was initiated from the keyboard (to know when to add focus styles).
- Determining if a `click` event was from `mouse`, `touch`, or `key` input.
- And anything else where knowing the type of user interaction that generated the event is helpful.
- You may also be interested in [Detect It](https://github.com/rafgraph/detect-it), which detects if a device is `mouseOnly`, `touchOnly`, or `hybrid`, and if the primary input is `mouse` or `touch`.

[![npm bundle size (version)](https://img.shields.io/bundlephobia/minzip/event-from?color=purple)](https://bundlephobia.com/result?p=event-from) ![npm type definitions](https://img.shields.io/npm/types/event-from?color=blue)

---

[Demo website](https://event-from.rafgraph.dev) (code in the [demo repo](https://github.com/rafgraph/event-from-demo))

---

```
npm install --save event-from
```

```js
import { eventFrom } from 'event-from';

const handleEvent = (event) => {
  // in the event handler call eventFrom and pass in the event
  // eventFrom will return 1 of 3 strings: 'mouse' | 'touch' | 'key'
  eventFrom(event);
};
```

---

### Ignore `mouse` events caused by `touch` input

> Note that a touch interaction will fire Touch Events as the interaction is in progress (touch on the screen), and will fire Mouse Events during a long press (extended touch on the screen), or after the touch interaction has finished (after the touch is removed from the screen) to support sites that only listen for Mouse Events.

```js
import { eventFrom } from 'event-from';

const handleMouseEvent = (e) => {
  // early return to ignore mouse events not from mouse input
  if (eventFrom(e) !== 'mouse') return;

  // code for handling mouse events from mouse input
};

element.addEventListener('mouseenter', handleMouseEvent, false);
```

---

### Determine if a `focus` event was from `key` input for accessibility

```js
import { eventFrom } from 'event-from';

const handleFocusEvent = (e) => {
  if (eventFrom(e) === 'key') {
    // set focus styles when focus is from keyboard input
  }
};

element.addEventListener('focus', handleFocusEvent, false);
```

---

### Determine if a `click` event was from `mouse`, `touch`, or `key` input

```js
import { eventFrom } from 'event-from';

const handleClickEvent = (e) => {
  switch (eventFrom(e)) {
    case 'mouse':
      // click event from mouse
      break;
    case 'touch':
      // click event from touch
      break;
    case 'key':
      // click event from key
      break;
  }
};

element.addEventListener('click', handleClickEvent, false);
```

---

## How it works

Event From sets passive event listeners on the `document` and `window` and tracks the recent event history to know what input type is responsible for the event that's passed to `eventFrom(event)`.

The listeners that Event From sets are all low frequency event listeners (enter/leave/down/up/focus/etc). Event From does not set any high frequency listeners such as `move` or `scroll` listeners.
