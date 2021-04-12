import { useMemo } from 'react';
import { styled } from './stitches.config';

import { useEventLog } from './useEventLog';
import { EventLogUI } from './EventLogUI';
import { DemoOptionsInterface } from './App';

const DemoContainer = styled('div', {
  paddingBottom: '20px',
  margin: '20px 0',
  borderBottom: '1px dotted $colors$lowContrast',
});

const TestButton = styled('button', {
  display: 'block',
  width: '100%',
  height: '70px',
  margin: '10px 0',
  fontSize: '24px',
  textAlign: 'center',
  color: '$highContrast',
  border: '1px solid $colors$highContrast',
  '&:hover, &:active': {
    color: '$green',
    borderColor: '$green',
  },
  '&:focus': {
    outline: '2px solid $colors$green',
    outlineOffset: '2px',
  },
});

const TestLinkContainer = styled('div', {
  margin: '10px 0',
});

const TestLink = styled('a', {
  fontSize: '24px',
  '&:hover, &:active': {
    color: '$green',
    borderColor: '$green',
  },
  '&:focus': {
    outline: '2px solid $colors$green',
    outlineOffset: '2px',
  },
});

const ScrollableContainer = styled('div', {
  margin: '10px 0',
  height: '100px',
  padding: '0 5px',
  border: '1px solid $colors$highContrast',
  overflow: 'scroll',
});

const ScrollableItem = styled('div', {
  pointerEvents: 'none',
});

const FormHeader = styled('h3', {
  fontSize: '14px',
  margin: '12px 0 2px',
  color: '$lowContrast',
});

const TextInput = styled('input', {
  width: '100%',
  fontSize: '24px',
  border: '1px solid $colors$highContrast',
  padding: '2px 4px',
  '&:hover, &:active': {
    color: '$green',
    borderColor: '$green',
  },
  '&:focus': {
    outline: '2px solid $colors$green',
    outlineOffset: '-1px',
  },
});

const SubmitInput = styled('input', {
  display: 'block',
  width: '100%',
  height: '44px',
  margin: '10px 0',
  fontSize: '24px',
  textAlign: 'center',
  color: '$highContrast',
  border: '1px solid $colors$highContrast',
  '&:hover, &:active': {
    color: '$green',
    borderColor: '$green',
  },
  '&:focus': {
    outline: '2px solid $colors$green',
    outlineOffset: '2px',
  },
});

export const ButtonDemo: React.VFC<DemoOptionsInterface> = ({
  setMoveListeners,
  preventDefaultOnAll,
  touchActionNone,
  webkitTapHighlightColorTransparent,
  // userSelectNone,
  webkitTouchCalloutNone,
  contextMenuPreventDefault,
  // draggableFalse,
  showTimeSincePreviousEvent,
  showEventCoordinates,
  showPointerEvents,
  showMouseEvents,
  showTouchEvents,
  showTimeSincePreviousPointerdown,
  consoleLogEvents,
}) => {
  const { eventLog, eventListeners } = useEventLog({
    setMoveListeners,
    preventDefaultOnAll,
    contextMenuPreventDefault,
    consoleLogEvents,
  });
  return (
    <DemoContainer id="button-demo">
      <TestButton
        {...eventListeners}
        css={{
          touchAction: touchActionNone ? 'none' : undefined,
          WebkitTapHighlightColor: webkitTapHighlightColorTransparent
            ? 'transparent'
            : undefined,
          WebkitTouchCallout: webkitTouchCalloutNone ? 'none' : undefined,
        }}
      >
        Test Button
      </TestButton>
      <EventLogUI
        eventLog={eventLog}
        showTimeSincePreviousEvent={showTimeSincePreviousEvent}
        showTimeSincePreviousPointerdown={showTimeSincePreviousPointerdown}
        showEventCoordinates={showEventCoordinates}
        showPointerEvents={showPointerEvents}
        showMouseEvents={showMouseEvents}
        showTouchEvents={showTouchEvents}
      />
    </DemoContainer>
  );
};

export const LinkDemo: React.VFC<DemoOptionsInterface> = ({
  setMoveListeners,
  preventDefaultOnAll,
  touchActionNone,
  webkitTapHighlightColorTransparent,
  // userSelectNone,
  webkitTouchCalloutNone,
  contextMenuPreventDefault,
  draggableFalse,
  showTimeSincePreviousEvent,
  showEventCoordinates,
  showPointerEvents,
  showMouseEvents,
  showTouchEvents,
  showTimeSincePreviousPointerdown,
  consoleLogEvents,
}) => {
  const { eventLog, eventListeners } = useEventLog({
    setMoveListeners,
    preventDefaultOnAll,
    contextMenuPreventDefault,
    consoleLogEvents,
  });
  return (
    <DemoContainer id="link-demo">
      <TestLinkContainer>
        <TestLink
          {...eventListeners}
          href="#link-demo"
          draggable={draggableFalse ? false : undefined}
          css={{
            touchAction: touchActionNone ? 'none' : undefined,
            WebkitTapHighlightColor: webkitTapHighlightColorTransparent
              ? 'transparent'
              : undefined,
            WebkitTouchCallout: webkitTouchCalloutNone ? 'none' : undefined,
          }}
        >
          Test link with href="#link-demo"
        </TestLink>
      </TestLinkContainer>
      <EventLogUI
        eventLog={eventLog}
        showTimeSincePreviousEvent={showTimeSincePreviousEvent}
        showTimeSincePreviousPointerdown={showTimeSincePreviousPointerdown}
        showEventCoordinates={showEventCoordinates}
        showPointerEvents={showPointerEvents}
        showMouseEvents={showMouseEvents}
        showTouchEvents={showTouchEvents}
      />
    </DemoContainer>
  );
};

export const ScrollableDemo: React.VFC<DemoOptionsInterface> = ({
  setMoveListeners,
  preventDefaultOnAll,
  touchActionNone,
  webkitTapHighlightColorTransparent,
  // userSelectNone,
  webkitTouchCalloutNone,
  contextMenuPreventDefault,
  // draggableFalse,
  showTimeSincePreviousEvent,
  showEventCoordinates,
  showPointerEvents,
  showMouseEvents,
  showTouchEvents,
  showTimeSincePreviousPointerdown,
  consoleLogEvents,
}) => {
  const { eventLog, eventListeners } = useEventLog({
    setMoveListeners,
    preventDefaultOnAll,
    contextMenuPreventDefault,
    consoleLogEvents,
  });
  return (
    <DemoContainer id="scrollable-demo">
      <ScrollableContainer
        {...eventListeners}
        css={{
          touchAction: touchActionNone ? 'none' : undefined,
          WebkitTapHighlightColor: webkitTapHighlightColorTransparent
            ? 'transparent'
            : undefined,
          WebkitTouchCallout: webkitTouchCalloutNone ? 'none' : undefined,
        }}
      >
        {useMemo(
          () =>
            Array(100)
              .fill(1)
              .map((_, idx) => (
                <ScrollableItem key={idx}>{idx} scroll me</ScrollableItem>
              )),
          [],
        )}
      </ScrollableContainer>
      <EventLogUI
        eventLog={eventLog}
        showTimeSincePreviousEvent={showTimeSincePreviousEvent}
        showTimeSincePreviousPointerdown={showTimeSincePreviousPointerdown}
        showEventCoordinates={showEventCoordinates}
        showPointerEvents={showPointerEvents}
        showMouseEvents={showMouseEvents}
        showTouchEvents={showTouchEvents}
      />
    </DemoContainer>
  );
};

export const FormDemo: React.VFC<DemoOptionsInterface> = ({
  setMoveListeners,
  preventDefaultOnAll,
  touchActionNone,
  webkitTapHighlightColorTransparent,
  // userSelectNone,
  webkitTouchCalloutNone,
  contextMenuPreventDefault,
  // draggableFalse,
  showTimeSincePreviousEvent,
  showEventCoordinates,
  showPointerEvents,
  showMouseEvents,
  showTouchEvents,
  showTimeSincePreviousPointerdown,
  consoleLogEvents,
}) => {
  const textInput = useEventLog({
    setMoveListeners,
    preventDefaultOnAll,
    contextMenuPreventDefault,
    consoleLogEvents,
  });
  const submitInput = useEventLog({
    setMoveListeners,
    preventDefaultOnAll,
    contextMenuPreventDefault,
    consoleLogEvents,
  });
  return (
    <DemoContainer id="form-demo">
      <form onSubmit={(e) => e.preventDefault()}>
        <TextInput
          {...textInput.eventListeners}
          type="text"
          placeholder="Form demo"
          css={{
            touchAction: touchActionNone ? 'none' : undefined,
            WebkitTapHighlightColor: webkitTapHighlightColorTransparent
              ? 'transparent'
              : undefined,
            WebkitTouchCallout: webkitTouchCalloutNone ? 'none' : undefined,
          }}
        />
        <SubmitInput
          {...submitInput.eventListeners}
          type="submit"
          value="Submit"
          css={{
            touchAction: touchActionNone ? 'none' : undefined,
            WebkitTapHighlightColor: webkitTapHighlightColorTransparent
              ? 'transparent'
              : undefined,
            WebkitTouchCallout: webkitTouchCalloutNone ? 'none' : undefined,
          }}
        />
      </form>
      <FormHeader>Text input event log</FormHeader>
      <EventLogUI
        eventLog={textInput.eventLog}
        height="150px"
        showTimeSincePreviousEvent={showTimeSincePreviousEvent}
        showTimeSincePreviousPointerdown={showTimeSincePreviousPointerdown}
        showEventCoordinates={showEventCoordinates}
        showPointerEvents={showPointerEvents}
        showMouseEvents={showMouseEvents}
        showTouchEvents={showTouchEvents}
      />
      <FormHeader>Submit input event log</FormHeader>
      <EventLogUI
        eventLog={submitInput.eventLog}
        height="150px"
        showTimeSincePreviousEvent={showTimeSincePreviousEvent}
        showTimeSincePreviousPointerdown={showTimeSincePreviousPointerdown}
        showEventCoordinates={showEventCoordinates}
        showPointerEvents={showPointerEvents}
        showMouseEvents={showMouseEvents}
        showTouchEvents={showTouchEvents}
      />
    </DemoContainer>
  );
};
