# ⚠️⚠️ Under Construction - Not Operational ⚠️⚠️

# Event From

Determine if a [DOM Event](https://developer.mozilla.org/en-US/docs/Web/API/Event) was caused by `mouse`, `touch`, or `key` input.

```
npm install --save event-from
```

```js
import { eventFrom } from "event-from";

// event is any DOM Event
eventFrom(event): "mouse" | "touch" | "key";
```

### Ignore MouseEvents that were caused by `touch` input

```js
import { eventFrom } from "event-from";

const handleMouseEnter = (e) => {
  if (eventFrom(e) !== "mouse") return;
  // code for handling mouse enter event from mouse input
};

element.addEventListener("mouseenter", handleMouseEnter, false);
```

### Determine if FocusEvent was caused by `key` input for accessibility

```js
import { eventFrom } from "event-from";

const handleFocus = (e) => {
  if (eventFrom(e) === "key") {
    // set focus styles for accessibility from keyboard input
  }
};
```
