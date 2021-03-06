import { useEffect, useRef, useContext } from 'react';
import { OptionsContext } from '../App';
import { EventLogItem, EventCategory } from './useEventLog';
import { styled } from '../stitches.config';

const EventLogContainer = styled('div', {
  height: '300px',
  padding: '0 5px',
  border: '1px solid $colors$highContrast',
  overflowY: 'scroll',
});

const EventLogLine = styled('code', {
  display: 'block',
  variants: {
    spaceAbove: {
      true: {
        marginTop: '20px',
      },
    },
  },
});

const InfoType = styled('span', {
  variants: {
    type: {
      click: { color: '$blue' },
      pointer: { color: '$purple' },
      mouse: { color: '$green' },
      touch: { color: '$orange' },
      key: { color: '$yellow' },
      focus: { color: '$blueGreen' },
      cancel: { color: '$red' },
      lowContrast: { color: '$lowContrast' },
    },
  },
});

const determineInfoType = (category: EventCategory, type: string) => {
  if (type === 'pointercancel' || type === 'touchcancel') return 'cancel';
  switch (category) {
    case 'click':
      return category;
    case 'pointer':
      return category;
    case 'mouse':
      return category;
    case 'touch':
      return category;
    case 'key':
      return category;
    case 'focus':
      return category;
    default:
      return undefined;
  }
};

interface EventLogUIProps {
  eventLog: EventLogItem[];
  height?: string;
}

export const EventLogUI: React.VFC<EventLogUIProps> = ({
  eventLog,
  height,
}) => {
  const {
    showTimeSincePreviousEvent,
    showTimeSincePreviousPointerdown,
    showEventCoordinates,
    showPointerEvents,
    showMouseEvents,
    showTouchEvents,
  } = useContext(OptionsContext);

  const eventLogEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (eventLogEl && eventLogEl.current) {
      eventLogEl.current.scrollTop = eventLogEl.current.scrollHeight;
    }
  });

  const eventsToExclude: string[] = [];
  if (!showPointerEvents) eventsToExclude.push('pointer');
  if (!showMouseEvents) eventsToExclude.push('mouse');
  if (!showTouchEvents) eventsToExclude.push('touch');

  return (
    <EventLogContainer ref={eventLogEl} css={{ height }}>
      {eventLog.map(
        (
          {
            category,
            type,
            count,
            eventFrom,
            time,
            timeSincePreviousEvent,
            timeSincePreviousPointerdown,
            xCoordinate,
            yCoordinate,
          },
          idx,
        ) =>
          eventsToExclude.includes(category) ? null : (
            <EventLogLine
              key={`${idx}${type}${count}`}
              spaceAbove={
                timeSincePreviousEvent !== undefined &&
                timeSincePreviousEvent > 1000
              }
            >
              <InfoType type="lowContrast">{idx}</InfoType>{' '}
              <InfoType type={determineInfoType(category, type)}>
                {type}
                {count ? ` (${count})` : ''}
              </InfoType>{' '}
              eventFrom <InfoType type={eventFrom}>{eventFrom}</InfoType>
              {showTimeSincePreviousEvent &&
                timeSincePreviousEvent !== undefined && (
                  <span>, {timeSincePreviousEvent}ms</span>
                )}
              {showTimeSincePreviousPointerdown &&
                timeSincePreviousPointerdown !== undefined && (
                  <span>, {timeSincePreviousPointerdown}ms_pointerdown</span>
                )}
              {showEventCoordinates && (
                <span>
                  , x:{xCoordinate}, y:{yCoordinate}
                </span>
              )}
            </EventLogLine>
          ),
      )}
    </EventLogContainer>
  );
};
