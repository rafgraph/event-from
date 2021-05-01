# Event From

[![npm bundle size (version)](https://img.shields.io/bundlephobia/minzip/event-from?color=purple)](https://bundlephobia.com/result?p=event-from) ![npm type definitions](https://img.shields.io/npm/types/event-from?color=blue)

Determine if a browser event was caused by `mouse`, `touch`, or `key` input. Can be used to:

- Ignore `mouse` events caused by `touch` input.
- Determine if `focus` was initiated from the keyboard (to know when to add focus styles).
- Determine if a `click` event was from `mouse`, `touch`, or `key` input.
- And anything else where knowing the type of user interaction that generated the event is helpful.
- If you're using React you may be interested in [React Interactive](https://github.com/rafgraph/react-interactive), which uses Event From under the hood.

---

### [Live demo app for Event From](https://event-from.rafgraph.dev)

Code is in the [`/demo`](/demo) folder.

---

```
npm install --save event-from
```

```js
import { eventFrom } from 'event-from';

const handleEvent = (event) => {
  // call eventFrom in the event handler and pass in the event
  // eventFrom will return 1 of 3 strings: 'mouse' | 'touch' | 'key'
  const eventFromValue = eventFrom(event);
  // ...your logic using the eventFromValue
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

### Determine if a `focus` event was from `key` input to add focus styles

```js
import { eventFrom } from 'event-from';

const handleFocusEvent = (e) => {
  if (eventFrom(e) === 'key') {
    // add focus styles when focus is from keyboard input
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

## `setEventFrom(value)`

`value: 'mouse' | 'touch' | 'key'`

Temporarily set the return value for `eventFrom(e)`. This is useful when manually generating events, for example calling `el.focus()` or `el.click()`, and you want `eventFrom(e)` to treat that event as occurring from a specific input.

```js
import { eventFrom, setEventFrom } from 'event-from';

const handleFocusEvent = (e) => {
  if (eventFrom(e) === 'key') {
    // add focus styles when focus is from keyboard input
  }
};

const element = document.getElementById('focus-example');

element.addEventListener('focus', handleFocusEvent, false);

// somewhere in your code where you want to call focus on the element
// and have it be treated as an event from 'key' input,
// now the call to eventFrom(e) in handleFocusEvent will return 'key'
setEventFrom('key');
element.focus();
```

---

## How it works

Event From sets passive capture phase event listeners on the `document` and `window` and tracks the recent event history to know what input type is responsible for the event that's passed to `eventFrom(event)`.

The listeners that Event From sets are all low frequency event listeners (enter/leave/down/up/focus/etc). Event From does not set any high frequency listeners such as `move` or `scroll` listeners.
