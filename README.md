# Event From

Determine if a browser event was caused by `mouse`, `touch`, or `key` input.

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
  // event is any user generated DOM Event
  // call eventFrom in the event handler
  eventFrom(event); // 'mouse' | 'touch' | 'key'
};
```

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
