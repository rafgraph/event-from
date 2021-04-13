import { useMemo, useContext } from 'react';
import { Interactive, InteractiveExtendableProps } from 'react-interactive';
import { styled, CSS } from './stitches.config';
import { useEventLog } from './useEventLog';
import { EventLogUI } from './EventLogUI';
import { OptionsContext } from './App';

const DemoContainer = styled('div', {
  paddingBottom: '20px',
  margin: '20px 0',
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

const InteractiveButton: React.VFC<InteractiveExtendableProps<'button'>> = (
  props,
) => <Interactive {...props} as="button" />;

const DemoButtonInteractive = styled(InteractiveButton, {
  ...DemoButtonSharedStyle,
  '&.hover, &.active': {
    color: '$green',
    borderColor: '$green',
  },
  '&.focusFromKey': {
    outline: '2px solid $colors$green',
    outlineOffset: '2px',
  },
});

const DemoButtonRegular = styled('button', {
  ...DemoButtonSharedStyle,
  '&:hover, &:active': {
    color: '$green',
    borderColor: '$green',
  },
  '&:focus': {
    outline: '2px solid $colors$green',
    outlineOffset: '2px',
  },
});

const DemoLinkContainer = styled('div', {
  margin: '10px 0',
});

const DemoLinkSharedStyle: CSS = {
  fontSize: '24px',
};

const InteractiveLink: React.VFC<InteractiveExtendableProps<'a'>> = (props) => (
  <Interactive {...props} as="a" />
);

const DemoLinkInteractive = styled(InteractiveLink, {
  ...DemoLinkSharedStyle,
  '&.hover, &.active': {
    color: '$green',
    borderColor: '$green',
  },
  '&.focusFromKey': {
    outline: '2px solid $colors$green',
    outlineOffset: '2px',
  },
});

const DemoLinkRegular = styled('a', {
  ...DemoLinkSharedStyle,
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

const DemoTextInputSharedStyle: CSS = {
  width: '100%',
  fontSize: '24px',
  border: '1px solid $colors$highContrast',
  padding: '2px 4px',
};

const InteractiveTextInput: React.VFC<InteractiveExtendableProps<'input'>> = (
  props,
) => <Interactive {...props} as="input" type="text" />;

const DemoTextInputInteractive = styled(InteractiveTextInput, {
  ...DemoTextInputSharedStyle,
  '&.hover, &.active': {
    color: '$green',
    borderColor: '$green',
  },
  '&.focus': {
    outline: '2px solid $colors$green',
    outlineOffset: '-1px',
  },
});

const DemoTextInputRegular = styled('input', {
  ...DemoTextInputSharedStyle,
  '&:hover, &:active': {
    color: '$green',
    borderColor: '$green',
  },
  '&:focus': {
    outline: '2px solid $colors$green',
    outlineOffset: '-1px',
  },
});

const DemoSubmitInputSharedStyle: CSS = {
  display: 'block',
  width: '100%',
  height: '44px',
  margin: '10px 0',
  fontSize: '24px',
  textAlign: 'center',
  color: '$highContrast',
  border: '1px solid $colors$highContrast',
};

const InteractiveSubmitInput: React.VFC<InteractiveExtendableProps<'input'>> = (
  props,
) => <Interactive {...props} as="input" type="submit" />;

const DemoSubmitInputInteractive = styled(InteractiveSubmitInput, {
  ...DemoSubmitInputSharedStyle,
  '&.hover, &.active': {
    color: '$green',
    borderColor: '$green',
  },
  '&.focusFromKey': {
    outline: '2px solid $colors$green',
    outlineOffset: '2px',
  },
});

const DemoSubmitInputRegular = styled('input', {
  ...DemoSubmitInputSharedStyle,
  '&:hover, &:active': {
    color: '$green',
    borderColor: '$green',
  },
  '&:focus': {
    outline: '2px solid $colors$green',
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
  return (
    <DemoContainer id="button-demo">
      {useReactInteractive ? (
        <DemoButtonInteractive
          {...eventListeners}
          useExtendedTouchActive={riUseExtendedTouchActive}
          css={{
            WebkitTapHighlightColor: webkitTapHighlightColorTransparent
              ? 'transparent'
              : undefined,
          }}
        >
          Test Button
        </DemoButtonInteractive>
      ) : (
        <DemoButtonRegular
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
  return (
    <DemoContainer id="link-demo">
      <DemoLinkContainer>
        {useReactInteractive ? (
          <DemoLinkInteractive
            {...eventListeners}
            href="#link-demo"
            useExtendedTouchActive={riUseExtendedTouchActive}
            css={{
              WebkitTapHighlightColor: webkitTapHighlightColorTransparent
                ? 'transparent'
                : undefined,
            }}
          >
            Test link with href="#link-demo"
          </DemoLinkInteractive>
        ) : (
          <DemoLinkRegular
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
  const submitInput = useEventLog();
  return (
    <DemoContainer id="form-demo">
      <form onSubmit={(e) => e.preventDefault()}>
        {useReactInteractive ? (
          <DemoTextInputInteractive
            {...textInput.eventListeners}
            useExtendedTouchActive={riUseExtendedTouchActive}
            placeholder="Form demo"
            css={{
              WebkitTapHighlightColor: webkitTapHighlightColorTransparent
                ? 'transparent'
                : undefined,
            }}
          />
        ) : (
          <DemoTextInputRegular
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
        )}
        {useReactInteractive ? (
          <DemoSubmitInputInteractive
            {...submitInput.eventListeners}
            useExtendedTouchActive={riUseExtendedTouchActive}
            value="Submit"
            css={{
              WebkitTapHighlightColor: webkitTapHighlightColorTransparent
                ? 'transparent'
                : undefined,
            }}
          />
        ) : (
          <DemoSubmitInputRegular
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
        )}
      </form>
      <FormHeader>Text input event log</FormHeader>
      <EventLogUI eventLog={textInput.eventLog} height="150px" />
      <FormHeader>Submit input event log</FormHeader>
      <EventLogUI eventLog={submitInput.eventLog} height="150px" />
    </DemoContainer>
  );
};
