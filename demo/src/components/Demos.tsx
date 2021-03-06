import { useMemo, useContext } from 'react';
import { Interactive } from 'react-interactive';
import { styled, CSS } from '../stitches.config';
import { useEventLog } from './useEventLog';
import { EventLogUI } from './EventLog';
import { OptionsContext } from '../App';

const DemoContainer = styled('div', {
  paddingBottom: '30px',
  margin: '26px 0',
  borderBottom: '1px dotted $colors$lowContrast',
});

const DemoButtonSharedStyle: CSS = {
  display: 'block',
  width: '100%',
  height: '70px',
  margin: '10px 0',
  fontSize: '24px',
  textAlign: 'center',
  color: '$highContrast',
  border: '1px solid $colors$highContrast',
};

const DemoButtonInteractive = styled(Interactive.Button, {
  ...DemoButtonSharedStyle,
  '&.hover, &.active': {
    color: '$green',
    borderColor: '$green',
  },
  '&.focusFromKey': {
    outline: '2px solid $colors$purple',
    outlineOffset: '2px',
  },
});

const DemoButtonRegular = styled('button', {
  ...DemoButtonSharedStyle,
  '&:hover, &:active': {
    color: '$green',
    borderColor: '$green',
  },
  '&:focus-visible': {
    outline: '2px solid $colors$purple',
    outlineOffset: '2px',
  },
});

const DemoLinkContainer = styled('div', {
  margin: '10px 0',
});

const DemoLinkSharedStyle: CSS = {
  fontSize: '24px',
  textDecorationLine: 'underline',
  textDecorationThickness: 'from-font',
  padding: '0 1px',
  margin: '0 -1px',
};

const DemoLinkInteractive = styled(Interactive.A, {
  ...DemoLinkSharedStyle,
  '&.hover, &.active': {
    color: '$green',
  },
  '&.focusFromKey': {
    outline: '2px solid $colors$purple',
    outlineOffset: '2px',
  },
});

const DemoLinkRegular = styled('a', {
  ...DemoLinkSharedStyle,
  '&:hover, &:active': {
    color: '$green',
  },
  '&:focus-visible': {
    outline: '2px solid $colors$purple',
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

const DemoTextInputSharedStyle: CSS = {
  width: '100%',
  fontSize: '24px',
  border: '1px solid $colors$highContrast',
  padding: '2px 5px',
};

const DemoTextInputInteractive = styled(Interactive.Input, {
  ...DemoTextInputSharedStyle,
  '&.hover, &.active': {
    borderColor: '$green',
  },
  '&.focus': {
    outline: '2px solid $colors$green',
    outlineOffset: '-1px',
  },
  '&.focusFromKey': {
    outline: '2px solid $colors$purple',
  },
});

const DemoTextInputRegular = styled('input', {
  ...DemoTextInputSharedStyle,
  '&:hover, &:active': {
    borderColor: '$green',
  },
  '&:focus': {
    outline: '2px solid $colors$green',
    outlineOffset: '-1px',
  },
});

const DemoSubmitButtonSharedStyle: CSS = {
  display: 'block',
  width: '100%',
  height: '44px',
  margin: '10px 0',
  fontSize: '24px',
  textAlign: 'center',
  color: '$highContrast',
  border: '1px solid $colors$highContrast',
};

const DemoSubmitButtonInteractive = styled(Interactive.Button, {
  ...DemoSubmitButtonSharedStyle,
  '&.hover, &.active': {
    color: '$green',
    borderColor: '$green',
  },
  '&.focusFromKey': {
    outline: '2px solid $colors$purple',
    outlineOffset: '2px',
  },
});

const DemoSubmitButtonRegular = styled('button', {
  ...DemoSubmitButtonSharedStyle,
  '&:hover, &:active': {
    color: '$green',
    borderColor: '$green',
  },
  '&:focus-visible': {
    outline: '2px solid $colors$purple',
    outlineOffset: '2px',
  },
});

export const ButtonDemo: React.VFC = () => {
  const {
    useReactInteractive,
    riUseExtendedTouchActive,
    touchActionNone,
    webkitTapHighlightColorTransparent,
    webkitTouchCalloutNone,
  } = useContext(OptionsContext);
  const { eventLog, eventListeners } = useEventLog();

  const css: CSS = {
    touchAction: touchActionNone ? 'none' : undefined,
    WebkitTapHighlightColor: webkitTapHighlightColorTransparent
      ? 'transparent'
      : undefined,
    WebkitTouchCallout: webkitTouchCalloutNone ? 'none' : undefined,
  };

  return (
    <DemoContainer id="button-demo">
      {useReactInteractive ? (
        <DemoButtonInteractive
          {...eventListeners}
          useExtendedTouchActive={riUseExtendedTouchActive}
          css={css}
        >
          Test Button
        </DemoButtonInteractive>
      ) : (
        <DemoButtonRegular {...eventListeners} css={css}>
          Test Button
        </DemoButtonRegular>
      )}
      <EventLogUI eventLog={eventLog} />
    </DemoContainer>
  );
};

export const LinkDemo: React.VFC = () => {
  const {
    useReactInteractive,
    riUseExtendedTouchActive,
    touchActionNone,
    webkitTapHighlightColorTransparent,
    webkitTouchCalloutNone,
    draggableFalse,
  } = useContext(OptionsContext);
  const { eventLog, eventListeners } = useEventLog();

  const css: CSS = {
    touchAction: touchActionNone ? 'none' : undefined,
    WebkitTapHighlightColor: webkitTapHighlightColorTransparent
      ? 'transparent'
      : undefined,
    WebkitTouchCallout: webkitTouchCalloutNone ? 'none' : undefined,
  };

  return (
    <DemoContainer id="link-demo">
      <DemoLinkContainer>
        {useReactInteractive ? (
          <DemoLinkInteractive
            {...eventListeners}
            useExtendedTouchActive={riUseExtendedTouchActive}
            href="#link-demo"
            draggable={draggableFalse ? false : undefined}
            css={css}
          >
            Test link with href="#link-demo"
          </DemoLinkInteractive>
        ) : (
          <DemoLinkRegular
            {...eventListeners}
            href="#link-demo"
            draggable={draggableFalse ? false : undefined}
            css={css}
          >
            Test link with href="#link-demo"
          </DemoLinkRegular>
        )}
      </DemoLinkContainer>
      <EventLogUI eventLog={eventLog} />
    </DemoContainer>
  );
};

export const ScrollableDemo: React.VFC = () => {
  const {
    touchActionNone,
    webkitTapHighlightColorTransparent,
    webkitTouchCalloutNone,
  } = useContext(OptionsContext);
  const { eventLog, eventListeners } = useEventLog();
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
      <EventLogUI eventLog={eventLog} />
    </DemoContainer>
  );
};

export const FormDemo: React.VFC = () => {
  const {
    useReactInteractive,
    riUseExtendedTouchActive,
    touchActionNone,
    webkitTapHighlightColorTransparent,
    webkitTouchCalloutNone,
  } = useContext(OptionsContext);
  const textInput = useEventLog();
  const submitButton = useEventLog();

  const css: CSS = {
    touchAction: touchActionNone ? 'none' : undefined,
    WebkitTapHighlightColor: webkitTapHighlightColorTransparent
      ? 'transparent'
      : undefined,
    WebkitTouchCallout: webkitTouchCalloutNone ? 'none' : undefined,
  };

  return (
    <DemoContainer id="form-demo">
      <form onSubmit={(e) => e.preventDefault()}>
        {useReactInteractive ? (
          <DemoTextInputInteractive
            {...textInput.eventListeners}
            useExtendedTouchActive={riUseExtendedTouchActive}
            type="text"
            placeholder="Form demo"
            css={css}
          />
        ) : (
          <DemoTextInputRegular
            {...textInput.eventListeners}
            type="text"
            placeholder="Form demo"
            css={css}
          />
        )}
        {useReactInteractive ? (
          <DemoSubmitButtonInteractive
            {...submitButton.eventListeners}
            useExtendedTouchActive={riUseExtendedTouchActive}
            type="submit"
            css={css}
          >
            Submit
          </DemoSubmitButtonInteractive>
        ) : (
          <DemoSubmitButtonRegular
            {...submitButton.eventListeners}
            type="submit"
            css={css}
          >
            Submit
          </DemoSubmitButtonRegular>
        )}
      </form>
      <FormHeader>Text input event log</FormHeader>
      <EventLogUI eventLog={textInput.eventLog} height="150px" />
      <FormHeader>Submit input event log</FormHeader>
      <EventLogUI eventLog={submitButton.eventLog} height="150px" />
    </DemoContainer>
  );
};
