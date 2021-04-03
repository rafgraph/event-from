import React, { useState, useMemo } from 'react';
import { eventFrom, EventFromInput } from 'event-from';

export type EventCategory =
  | 'click'
  | 'mouse'
  | 'pointer'
  | 'touch'
  | 'key'
  | 'focus'
  | 'drag'
  | 'wheel'
  | 'scroll'
  | 'select'
  | 'contextMenu';

const listOfEventListenerTypes: {
  propName: string;
  category: EventCategory;
}[] = [
  // click events
  { propName: 'onClick', category: 'click' },
  { propName: 'onDoubleClick', category: 'click' },
  // pointer events
  { propName: 'onPointerEnter', category: 'pointer' },
  { propName: 'onPointerLeave', category: 'pointer' },
  { propName: 'onPointerOver', category: 'pointer' },
  { propName: 'onPointerOut', category: 'pointer' },
  { propName: 'onPointerDown', category: 'pointer' },
  { propName: 'onPointerUp', category: 'pointer' },
  { propName: 'onPointerMove', category: 'pointer' },
  { propName: 'onGotPointerCapture', category: 'pointer' },
  { propName: 'onLostPointerCapture', category: 'pointer' },
  { propName: 'onPointerCancel', category: 'pointer' },
  // mouse events
  { propName: 'onMouseEnter', category: 'mouse' },
  { propName: 'onMouseLeave', category: 'mouse' },
  { propName: 'onMouseOver', category: 'mouse' },
  { propName: 'onMouseOut', category: 'mouse' },
  { propName: 'onMouseDown', category: 'mouse' },
  { propName: 'onMouseUp', category: 'mouse' },
  { propName: 'onMouseMove', category: 'mouse' },
  // touch events
  { propName: 'onTouchStart', category: 'touch' },
  { propName: 'onTouchMove', category: 'touch' },
  { propName: 'onTouchEnd', category: 'touch' },
  { propName: 'onTouchCancel', category: 'touch' },
  // key events
  { propName: 'onKeyDown', category: 'key' },
  { propName: 'onKeyUp', category: 'key' },
  // focus events
  { propName: 'onFocus', category: 'focus' },
  { propName: 'onBlur', category: 'focus' },
  // drag events
  { propName: 'onDragStart', category: 'drag' },
  { propName: 'onDrag', category: 'drag' },
  { propName: 'onDragEnd', category: 'drag' },
  // wheel and scroll events not fully supported by eventFrom
  // // wheel event
  // { propName: 'onWheel', category: 'wheel' },
  // // scroll event
  // { propName: 'onScroll', category: 'scroll' },
  // select event
  { propName: 'onSelect', category: 'select' },
  // context menu
  { propName: 'onContextMenu', category: 'contextMenu' },
];

interface FindIndexOfRecentEventOfSameType {
  (arg: {
    eventLog: EventLogItem[];
    type: string;
    eventFrom: EventFromInput;
    nowTime: number;
    recentTimeCutoff: number;
  }): number | undefined;
}

const findIndexOfRecentEventOfSameType: FindIndexOfRecentEventOfSameType = ({
  eventLog,
  type,
  eventFrom,
  nowTime,
  recentTimeCutoff,
}) => {
  for (
    let i = eventLog.length - 1;
    i >= Math.max(eventLog.length - 2, 0);
    i--
  ) {
    const e = eventLog[i];
    const eventTime = e.lastEventTime || e.time;

    if (
      e.type === type &&
      e.eventFrom === eventFrom &&
      eventTime &&
      nowTime - eventTime <= recentTimeCutoff
    )
      return i;
  }
};

interface CalculateTimeSincePreviousEvent {
  (arg: { eventLog: EventLogItem[]; nowTime: number; eventType?: string }):
    | number
    | undefined;
}

const calculateTimeSincePreviousEvent: CalculateTimeSincePreviousEvent = ({
  eventLog,
  nowTime,
  eventType,
}) => {
  for (let i = eventLog.length - 1; i >= 0; i--) {
    if (eventType && eventType !== eventLog[i].type) {
      continue;
    }
    const eventTime = eventLog[i].lastEventTime || eventLog[i].time;
    if (eventTime !== undefined) {
      return nowTime - eventTime;
    }
  }
  return undefined;
};

export interface EventLogItem {
  category: EventCategory;
  type: string;
  eventFrom: EventFromInput;
  time?: number;
  lastEventTime?: number; // used when counting multiple events of the same time, e.g. mousemove
  timeSincePreviousEvent?: number;
  timeSincePreviousPointerdown?: number;
  xCoordinate?: number;
  yCoordinate?: number;
  target?: any;
  count?: number;
}

interface EventListener {
  [key: string]: React.EventHandler<any>;
}

interface UseEventLog {
  (options: {
    setMoveListeners?: boolean;
    preventDefaultOnAll: boolean;
    contextMenuPreventDefault: boolean;
    consoleLogEvents: boolean;
  }): {
    eventLog: EventLogItem[];
    eventListeners: EventListener;
  };
}

export const useEventLog: UseEventLog = ({
  setMoveListeners,
  preventDefaultOnAll,
  contextMenuPreventDefault,
  consoleLogEvents,
}) => {
  const [eventLog, updateEventLog] = useState<EventLogItem[]>([]);

  const eventListeners = useMemo(
    () =>
      listOfEventListenerTypes.reduce(
        (eventListenersReduceObj: EventListener, listenerType) => {
          if (
            !setMoveListeners &&
            /move/.test(listenerType.propName.toLowerCase())
          ) {
            return eventListenersReduceObj;
          }

          eventListenersReduceObj[listenerType.propName] = (event) => {
            const eventFromResult = eventFrom(event);
            const nowTime = Date.now();

            if (
              preventDefaultOnAll ||
              (contextMenuPreventDefault && event.type === 'contextmenu')
            ) {
              event.preventDefault();
            }

            if (consoleLogEvents) {
              console.log(event, `eventFrom: ${eventFromResult}`);
            }

            updateEventLog((prevState) => {
              const newState = [...prevState];
              const recentEventOfSameTypeIdx = findIndexOfRecentEventOfSameType(
                {
                  eventLog: newState,
                  type: event.type,
                  eventFrom: eventFromResult,
                  nowTime,
                  recentTimeCutoff: 1000,
                },
              );

              if (
                [
                  'click',
                  'mousemove',
                  'pointermove',
                  'touchmove',
                  'keydown',
                  'keyup',
                  'drag',
                  'scroll',
                  'wheel',
                ].includes(event.type) &&
                recentEventOfSameTypeIdx !== undefined
              ) {
                const recentEvent = newState[recentEventOfSameTypeIdx];
                const newCount = recentEvent.count ? recentEvent.count + 1 : 2;
                newState[recentEventOfSameTypeIdx] = {
                  category: listenerType.category,
                  type: event.type,
                  eventFrom: eventFromResult,
                  time: recentEvent.time,
                  lastEventTime: nowTime,
                  timeSincePreviousEvent: recentEvent.timeSincePreviousEvent,
                  timeSincePreviousPointerdown:
                    recentEvent.timeSincePreviousPointerdown,
                  xCoordinate: Math.round(event.clientX),
                  yCoordinate: Math.round(event.clientY),
                  target: event.target,
                  count: newCount,
                };
              } else {
                newState.push({
                  category: listenerType.category,
                  type: event.type,
                  eventFrom: eventFromResult,
                  time: nowTime,
                  timeSincePreviousEvent: calculateTimeSincePreviousEvent({
                    eventLog: newState,
                    nowTime,
                  }),
                  timeSincePreviousPointerdown: calculateTimeSincePreviousEvent(
                    {
                      eventLog: newState,
                      eventType: 'pointerdown',
                      nowTime,
                    },
                  ),
                  xCoordinate: Math.round(event.clientX),
                  yCoordinate: Math.round(event.clientY),
                  target: event.target,
                });
              }

              return newState;
            });
          };
          return eventListenersReduceObj;
        },
        {},
      ),
    [
      setMoveListeners,
      preventDefaultOnAll,
      contextMenuPreventDefault,
      consoleLogEvents,
    ],
  );

  return { eventLog, eventListeners };
};
