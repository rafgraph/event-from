import { useState, useEffect, useMemo, createContext } from 'react';
import useDarkMode from 'use-dark-mode';
import { styled, globalCss, darkThemeClass } from './stitches.config';
import { Link, ButtonBase, CheckboxBase, DarkModeButton } from './Interactive';
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

const InfoContainer = styled('p', {
  padding: '10px 0',
  borderBottom: '1px dotted $colors$lowContrast',
});

const DemoOptionsContainer = styled('div', {
  borderBottom: '1px dotted $colors$lowContrast',
  '& code': {
    backgroundColor: '$backgroundContrast',
    padding: '0 5px',
    borderRadius: '5px',
  },
});

const DemoOptionsButton = styled(ButtonBase, {
  display: 'block',
  margin: '10px 0',
  fontSize: '20px',
});

const OptionsContainer = styled('div', {
  paddingBottom: '6px',
});

const OptionSectionHeading = styled('div', {
  margin: '14px 0 6px',
  fontWeight: '600',
});

const OptionItemContainer = styled('div', {
  margin: '4px 0',
});

const OptionLabel = styled('label', {
  cursor: 'pointer',
  WebkitTapHighlightColor: 'transparent',
  variants: {
    disabled: {
      true: {
        opacity: 0.5,
        cursor: 'unset',
      },
    },
  },
});

const OptionCheckbox = styled(CheckboxBase, {
  verticalAlign: 'middle',
  marginRight: '4px',
});

interface OptionItemCheckboxProps {
  label: React.ReactNode;
  checked: boolean;
  disabled?: boolean;
  update: React.Dispatch<React.SetStateAction<boolean>>;
}

const OptionItemCheckbox: React.VFC<OptionItemCheckboxProps> = ({
  label,
  checked,
  disabled,
  update,
}) => (
  <OptionItemContainer>
    <OptionLabel disabled={disabled}>
      <OptionCheckbox
        disabled={disabled}
        checked={checked}
        onChange={() => update((prevState) => !prevState)}
      />
      {label}
    </OptionLabel>
  </OptionItemContainer>
);

interface DemoOptionsInterface {
  useReactInteractive: boolean;
  setMoveListeners: boolean;
  preventDefaultOnAll: boolean;
  touchActionNone: boolean;
  webkitTapHighlightColorTransparent: boolean;
  riUseExtendedTouchActive: boolean;
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

export const OptionsContext = createContext<DemoOptionsInterface>({
  useReactInteractive: false,
  setMoveListeners: false,
  preventDefaultOnAll: false,
  touchActionNone: false,
  webkitTapHighlightColorTransparent: false,
  riUseExtendedTouchActive: false,
  userSelectNone: false,
  webkitTouchCalloutNone: false,
  contextMenuPreventDefault: false,
  draggableFalse: false,
  showTimeSincePreviousEvent: false,
  showEventCoordinates: false,
  showPointerEvents: false,
  showMouseEvents: false,
  showTouchEvents: false,
  showTimeSincePreviousPointerdown: false,
  consoleLogEvents: false,
});

export const App = () => {
  globalCss();

  const darkMode = useDarkMode(undefined, {
    classNameDark: darkThemeClass,
  });

  const [showDemoOptions, updateShowDemoOptions] = useState(false);

  // options
  const [useReactInteractive, updateUseReactInteractive] = useState(true);
  const [setMoveListeners, updateSetMoveListeners] = useState(true);
  const [preventDefaultOnAll, updatePreventDefaultOnAll] = useState(false);
  const [touchActionNone, updateTouchActionNone] = useState(false);
  const [
    webkitTapHighlightColorTransparent,
    updateWebkitTapHighlightColorTransparent,
  ] = useState(true);

  // options to enable long press on touch devices
  const [
    riUseExtendedTouchActive,
    updateInteractiveUseExtendedTouchActive,
  ] = useState(false);
  const [userSelectNone, updateUserSelectNone] = useState(false);
  const [contextMenuPreventDefault, updateContextMenuPreventDefault] = useState(
    false,
  );
  const [webkitTouchCalloutNone, updateWebkitTouchCalloutNone] = useState(
    false,
  );
  const [draggableFalse, updateDraggableFalse] = useState(false);

  // when using react-interactive ensure the the following are set to false
  if (useReactInteractive) {
    userSelectNone && updateUserSelectNone(false);
    contextMenuPreventDefault && updateContextMenuPreventDefault(false);
    webkitTouchCalloutNone && updateWebkitTouchCalloutNone(false);
    draggableFalse && updateDraggableFalse(false);
  }

  // event log options
  const [
    showTimeSincePreviousEvent,
    updateShowTimeSincePreviousEvent,
  ] = useState(false);
  const [
    showTimeSincePreviousPointerdown,
    updateShowTimeSincePreviousPointerdown,
  ] = useState(false);
  const [showEventCoordinates, updateShowEventCoordinates] = useState(false);
  const [showPointerEvents, updateShowPointerEvents] = useState(true);
  const [showMouseEvents, updateShowMouseEvents] = useState(true);
  const [showTouchEvents, updateShowTouchEvents] = useState(true);
  const [consoleLogEvents, updateConsoleLogEvents] = useState(false);

  const demoOptions: DemoOptionsInterface = useMemo(
    () => ({
      useReactInteractive,
      setMoveListeners,
      preventDefaultOnAll,
      touchActionNone,
      webkitTapHighlightColorTransparent,
      riUseExtendedTouchActive,
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
    }),
    [
      useReactInteractive,
      setMoveListeners,
      preventDefaultOnAll,
      touchActionNone,
      webkitTapHighlightColorTransparent,
      riUseExtendedTouchActive,
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
    ],
  );

  // set user-select: none on the body when userSelectNone is enabled
  useEffect(() => {
    document.body.style.userSelect = userSelectNone ? 'none' : '';
    document.body.style.webkitUserSelect = userSelectNone ? 'none' : '';
  }, [userSelectNone]);

  return (
    <AppDiv>
      <H1 className={undefined}>
        <span>Event From Demo</span>
        <DarkModeButton onClick={darkMode.toggle} />
      </H1>
      <Link type="lowContrast" href="https://github.com/rafgraph/event-from">
        https://github.com/rafgraph/event-from
      </Link>
      <InfoContainer>
        Some buttons, links, etc with event listeners and logs to demonstrate{' '}
        <code>eventFrom</code>.
      </InfoContainer>
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
                  Use{' '}
                  <Link href="https://github.com/rafgraph/react-interactive">
                    React Interactive
                  </Link>{' '}
                  for interactive elements in demo (button, link, input, etc)
                </>
              }
              checked={useReactInteractive}
              update={updateUseReactInteractive}
            />
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
              label={
                <>
                  <code>touch-action: none</code>, set on the element, prevents
                  the browser from using the touch interaction, e.g. scrolling
                  when touch starts on the button, and also prevents{' '}
                  <code>pointercancel</code> event during a touch interaction.
                </>
              }
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
              disabled={!useReactInteractive}
              label={
                <>
                  React Interactive's <code>useExtendedTouchActive</code>, note
                  that when using React Interactive the below options are
                  disabled because they are implemented by React Interactive
                  when <code>useExtendedTouchActive</code> is true.
                </>
              }
              checked={riUseExtendedTouchActive}
              update={updateInteractiveUseExtendedTouchActive}
            />
            <OptionItemCheckbox
              disabled={useReactInteractive}
              label={
                <>
                  <code>user-select: none</code>, set on the{' '}
                  <code>{'<body>'}</code>, iOS on long press attempts to select
                  nearby text even if the target element has set{' '}
                  <code>user-select: none</code>, so need to set it on the body
                  and not the element.
                </>
              }
              checked={userSelectNone}
              update={updateUserSelectNone}
            />
            <OptionItemCheckbox
              disabled={useReactInteractive}
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
              disabled={useReactInteractive}
              label={
                <>
                  <code>-webkit-touch-callout: none</code>, to prevent the iOS
                  "context menu" from appearing on long press of links because
                  iOS doesn't support <code>conextmenu</code> events.
                </>
              }
              checked={webkitTouchCalloutNone}
              update={updateWebkitTouchCalloutNone}
            />
            <OptionItemCheckbox
              disabled={useReactInteractive}
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
      <OptionsContext.Provider value={demoOptions}>
        <ButtonDemo />
        <LinkDemo />
        {/* scroll events not fully supported by eventFrom */}
        {/* <ScrollableDemo /> */}
        <FormDemo />
      </OptionsContext.Provider>
    </AppDiv>
  );
};
