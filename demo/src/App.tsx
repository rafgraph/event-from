import { useState, useMemo } from 'react';
import useDarkMode from 'use-dark-mode';
import { styled, globalStyles, darkThemeClass } from './stitches.config';
import { StyledInteractiveLink, StyledDarkModeToggle } from './Interactive';
import {
  ButtonDemo,
  LinkDemo,
  // ScrollableDemo,
  FormDemo,
} from './Demos';

const AppDiv = styled('div', {
  maxWidth: '700px',
  padding: '14px 15px 25px',
  margin: '0 auto',
});

const H1 = styled('h1', {
  fontSize: '26px',
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '2px',
});

const InfoP = styled('p', {
  padding: '10px 0',
  borderBottom: '1px dotted $lowContrast',
});

const DemoOptionsContainer = styled('div', {
  borderBottom: '1px dotted $lowContrast',
});

const DemoOptionsButton = styled('button', {
  cursor: 'pointer',
  WebkitTapHighlightColor: 'transparent',
  display: 'block',
  margin: '10px 0',
  fontSize: '20px',
  color: '$highContrast',
  ':hover, &:active': {
    color: '$green',
    borderColor: '$green',
  },
  ':focus': {
    outlineColor: '$green',
    outline: '2px solid',
    outlineOffset: '2px',
  },
});

const OptionsContainer = styled('div', {
  paddingBottom: '6px',
});

const OptionSectionHeading = styled('div', {
  margin: '14px 0 6px',
});

const OptionItemContainer = styled('div', {
  margin: '4px 0',
});

const StyledLabel = styled('label', {
  cursor: 'pointer',
  WebkitTapHighlightColor: 'transparent',
});

const StyledCheckbox = styled('input', {
  appearance: 'checkbox',
  verticalAlign: 'middle',
  marginRight: '4px',
  ':focus': {
    outlineColor: '$green',
    outline: '2px solid',
    outlineOffset: '1px',
  },
});

interface OptionItemCheckboxProps {
  label: React.ReactNode;
  checked: boolean;
  update: React.Dispatch<React.SetStateAction<boolean>>;
}

const OptionItemCheckbox: React.VFC<OptionItemCheckboxProps> = ({
  label,
  checked,
  update,
}) => (
  <OptionItemContainer>
    <StyledLabel>
      <StyledCheckbox
        type="checkbox"
        checked={checked}
        onChange={() => update((prevState) => !prevState)}
      />
      {label}
    </StyledLabel>
  </OptionItemContainer>
);

export interface DemoOptionsInterface {
  setMoveListeners: boolean;
  preventDefaultOnAll: boolean;
  touchActionNone: boolean;
  webkitTapHighlightColorTransparent: boolean;
  userSelectNone: boolean;
  webkitTouchCalloutNone: boolean;
  contextMenuPreventDefault: boolean;
  draggableFalse: boolean;
  showTimeSincePreviousEvent: boolean;
  showEventCoordinates: boolean;
  showPointerEvents: boolean;
  showMouseEvents: boolean;
  showTouchEvents: boolean;
  showTimeSincePreviousPointerdown: boolean;
  consoleLogEvents: boolean;
}

export const App = () => {
  globalStyles();

  const darkMode = useDarkMode(undefined, {
    classNameDark: darkThemeClass,
  });

  const [showDemoOptions, updateShowDemoOptions] = useState(false);

  // options
  const [setMoveListeners, updateSetMoveListeners] = useState(true);
  const [preventDefaultOnAll, updatePreventDefaultOnAll] = useState(false);
  const [touchActionNone, updateTouchActionNone] = useState(false);
  const [
    webkitTapHighlightColorTransparent,
    updateWebkitTapHighlightColorTransparent,
  ] = useState(true);

  // options to enable long press on touch devices
  const [userSelectNone, updateUserSelectNone] = useState(false);
  const [contextMenuPreventDefault, updateContextMenuPreventDefault] = useState(
    false,
  );
  const [webkitTouchCalloutNone, updateWebkitTouchCalloutNone] = useState(
    false,
  );
  const [draggableFalse, updateDraggableFalse] = useState(false);

  // event log options
  const [
    showTimeSincePreviousEvent,
    updateShowTimeSincePreviousEvent,
  ] = useState(true);
  const [
    showTimeSincePreviousPointerdown,
    updateShowTimeSincePreviousPointerdown,
  ] = useState(false);
  const [showEventCoordinates, updateShowEventCoordinates] = useState(false);
  const [showPointerEvents, updateShowPointerEvents] = useState(true);
  const [showMouseEvents, updateShowMouseEvents] = useState(true);
  const [showTouchEvents, updateShowTouchEvents] = useState(true);
  const [consoleLogEvents, updateConsoleLogEvents] = useState(false);

  const demoOptions: DemoOptionsInterface = {
    setMoveListeners,
    preventDefaultOnAll,
    touchActionNone,
    webkitTapHighlightColorTransparent,
    userSelectNone,
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
  };

  // set user-select: none on the body when userSelectNone is enabled
  useMemo(() => {
    document.body.style.userSelect = userSelectNone ? 'none' : '';
    document.body.style.webkitUserSelect = userSelectNone ? 'none' : '';
  }, [userSelectNone]);

  return (
    <AppDiv>
      <H1>
        <span>Event From Demo</span>
        <StyledDarkModeToggle onClick={darkMode.toggle} />
      </H1>
      <StyledInteractiveLink
        type="lowContrast"
        href="https://github.com/rafgraph/event-from"
      >
        https://github.com/rafgraph/event-from
      </StyledInteractiveLink>
      <InfoP>
        A collection of buttons, links, etc with event listeners and logs to
        demonstrate <code>eventFrom</code>.
      </InfoP>
      <DemoOptionsContainer>
        <DemoOptionsButton
          onClick={() => updateShowDemoOptions(!showDemoOptions)}
        >
          Demo options - {`${showDemoOptions ? 'hide' : 'show'}`}
        </DemoOptionsButton>
        {showDemoOptions && (
          <OptionsContainer>
            <OptionItemCheckbox
              label={
                <>
                  Set <code>move</code> event listeners in demo
                </>
              }
              checked={setMoveListeners}
              update={updateSetMoveListeners}
            />
            <OptionItemCheckbox
              label={
                <>
                  Call <code>preventDefault()</code> on all events in demo
                </>
              }
              checked={preventDefaultOnAll}
              update={updatePreventDefaultOnAll}
            />
            <OptionItemCheckbox
              label={<code>touch-action: none</code>}
              checked={touchActionNone}
              update={updateTouchActionNone}
            />
            <OptionItemCheckbox
              label={<code>-webkit-tap-highlight-color: transparent</code>}
              checked={webkitTapHighlightColorTransparent}
              update={updateWebkitTapHighlightColorTransparent}
            />
            <OptionSectionHeading>
              Options to enable long press on touch devices:
            </OptionSectionHeading>
            <OptionItemCheckbox
              label={
                <>
                  <code>user-select: none</code>, set on the{' '}
                  <code>{'<body>'}</code>, iOS on long press attempts to select
                  nearby text even if the target element has set this to{' '}
                  <code>none</code>, so need to set it on the body.
                </>
              }
              checked={userSelectNone}
              update={updateUserSelectNone}
            />
            <OptionItemCheckbox
              label={
                <>
                  <code>contextmenu</code> event <code>preventDefault()</code>,
                  to prevent the context menu from appearing on long press of
                  links.
                </>
              }
              checked={contextMenuPreventDefault}
              update={updateContextMenuPreventDefault}
            />
            <OptionItemCheckbox
              label={
                <>
                  <code>-webkit-touch-callout: none</code>, to prevent the
                  "context menu" from appearing on iOS long press of links
                  because iOS doesn't support <code>conextmenu</code> events.
                </>
              }
              checked={webkitTouchCalloutNone}
              update={updateWebkitTouchCalloutNone}
            />
            <OptionItemCheckbox
              label={
                <>
                  <code>draggable="false"</code>, to prevent from dragging links
                  on long press on iPadOS.
                </>
              }
              checked={draggableFalse}
              update={updateDraggableFalse}
            />
            <OptionSectionHeading>Event log options:</OptionSectionHeading>
            <OptionItemCheckbox
              label={'show time (ms) since previous event'}
              checked={showTimeSincePreviousEvent}
              update={updateShowTimeSincePreviousEvent}
            />
            <OptionItemCheckbox
              label={
                <>
                  show time (ms) since previous <code>pointerdown</code> event
                </>
              }
              checked={showTimeSincePreviousPointerdown}
              update={updateShowTimeSincePreviousPointerdown}
            />
            <OptionItemCheckbox
              label={
                <>
                  show event coordinates: <code>clientX</code>,{' '}
                  <code>clientY</code>
                </>
              }
              checked={showEventCoordinates}
              update={updateShowEventCoordinates}
            />
            <OptionItemCheckbox
              label={
                <>
                  show <code>pointer</code> events
                </>
              }
              checked={showPointerEvents}
              update={updateShowPointerEvents}
            />
            <OptionItemCheckbox
              label={
                <>
                  show <code>mouse</code> events
                </>
              }
              checked={showMouseEvents}
              update={updateShowMouseEvents}
            />
            <OptionItemCheckbox
              label={
                <>
                  show <code>touch</code> events
                </>
              }
              checked={showTouchEvents}
              update={updateShowTouchEvents}
            />
            <OptionItemCheckbox
              label={
                <>
                  <code>console.log</code> all events
                </>
              }
              checked={consoleLogEvents}
              update={updateConsoleLogEvents}
            />
          </OptionsContainer>
        )}
      </DemoOptionsContainer>

      <ButtonDemo {...demoOptions} />
      <LinkDemo {...demoOptions} />
      {/* scroll events not fully supported by eventFrom */}
      {/* <ScrollableDemo {...demoOptions} /> */}
      <FormDemo {...demoOptions} />
    </AppDiv>
  );
};
