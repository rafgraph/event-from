import { useState, useEffect, useMemo, createContext } from 'react';
import { InteractiveStateChange } from 'react-interactive';
import { styled, globalCss } from './stitches.config';
import { DarkModeButton } from './ui/DarkModeButton';
import { GitHubIconLink } from './ui/GitHubIconLink';
import { Link } from './ui/Link';
import { Button } from './ui/Button';
import { OptionCheckboxAndLabel } from './ui/OptionCheckboxAndLabel';
import {
  ButtonDemo,
  LinkDemo,
  // ScrollableDemo,
  FormDemo,
} from './components/Demos';

const AppContainer = styled('div', {
  maxWidth: '700px',
  padding: '12px 15px 25px',
  margin: '0 auto',
});

const HeaderContainer = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '18px',
});

const H1 = styled('h1', {
  fontSize: '26px',
  marginRight: '16px',
});

const HeaderIconContainer = styled('span', {
  width: '78px',
  display: 'inline-flex',
  justifyContent: 'space-between',
  gap: '12px',
});

const InfoContainer = styled('p', {
  paddingBottom: '12px',
  borderBottom: '1px dotted $colors$lowContrast',
});

const DemoOptionsContainer = styled('div', {
  padding: '10px 0 14px',
  borderBottom: '1px dotted $colors$lowContrast',
});

const DemoOptionsButton = styled(Button, {
  display: 'block',
  fontSize: '20px',
  padding: '0 1px',
  margin: '0 -1px',
});

const OptionsContainer = styled('div', {
  marginTop: '12px',
});

const OptionSectionHeading = styled('div', {
  margin: '14px 0 6px',
  fontWeight: '600',
});

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
    <AppContainer>
      <HeaderContainer>
        <H1>Event From Demo</H1>
        <HeaderIconContainer>
          <DarkModeButton />
          <GitHubIconLink
            href="https://github.com/rafgraph/event-from"
            title="GitHub repository for Event From"
          />
        </HeaderIconContainer>
      </HeaderContainer>
      <InfoContainer>
        Some elements with event listeners and logs to demonstrate{' '}
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
            <OptionCheckboxAndLabel
              label={({ setDisableCheckbox }) => (
                <>
                  Use{' '}
                  <Link
                    href="https://github.com/rafgraph/react-interactive"
                    onStateChange={({
                      state,
                      prevState,
                    }: InteractiveStateChange) => {
                      if (state.hover || state.active) {
                        setDisableCheckbox(true);
                      } else {
                        prevState.active === 'touchActive'
                          ? // fix for radix label bug https://github.com/radix-ui/primitives/issues/609
                            // since can't stop propagation of click event to radix label
                            // and touchActive is exited before click event is dispatched by the browser
                            // so have to delay enabling checkbox until after the browser (potentially) dispatches click event
                            window.setTimeout(
                              () => setDisableCheckbox(false),
                              500,
                            )
                          : setDisableCheckbox(false);
                      }
                    }}
                  >
                    React Interactive
                  </Link>{' '}
                  for interactive elements in demo (button, link, input, etc)
                </>
              )}
              checked={useReactInteractive}
              setChecked={updateUseReactInteractive}
            />
            <OptionCheckboxAndLabel
              label={
                <>
                  Set <code>move</code> event listeners in demo
                </>
              }
              checked={setMoveListeners}
              setChecked={updateSetMoveListeners}
            />
            <OptionCheckboxAndLabel
              label={
                <>
                  Call <code>preventDefault()</code> on all events in demo
                </>
              }
              checked={preventDefaultOnAll}
              setChecked={updatePreventDefaultOnAll}
            />
            <OptionCheckboxAndLabel
              label={
                <>
                  <code>touch-action: none</code>, set on the element, prevents
                  the browser from using the touch interaction, e.g. scrolling
                  when touch starts on the button, and also prevents{' '}
                  <code>pointercancel</code> event during a touch interaction.
                </>
              }
              checked={touchActionNone}
              setChecked={updateTouchActionNone}
            />
            <OptionCheckboxAndLabel
              label={<code>-webkit-tap-highlight-color: transparent</code>}
              checked={webkitTapHighlightColorTransparent}
              setChecked={updateWebkitTapHighlightColorTransparent}
            />
            <OptionSectionHeading>
              Options to enable long press on touch devices:
            </OptionSectionHeading>
            <OptionCheckboxAndLabel
              label={
                <>
                  React Interactive's <code>useExtendedTouchActive</code>.
                </>
              }
              checked={riUseExtendedTouchActive}
              setChecked={updateInteractiveUseExtendedTouchActive}
              disabled={!useReactInteractive}
            />
            <OptionCheckboxAndLabel
              label={
                <>
                  <code>user-select: none</code>, set on the{' '}
                  <code>{'<body>'}</code>, iOS on long press attempts to select
                  nearby text even if the target element has set{' '}
                  <code>user-select: none</code>, so need to set it on the body
                  and not the element.
                  {useReactInteractive && (
                    <>
                      {' '}
                      This option is disabled when using React Interactive as it
                      is implemented by <code>useExtendedTouchActive</code>.
                    </>
                  )}
                </>
              }
              checked={userSelectNone}
              setChecked={updateUserSelectNone}
              disabled={useReactInteractive}
            />
            <OptionCheckboxAndLabel
              label={
                <>
                  <code>contextmenu</code> event <code>preventDefault()</code>,
                  to prevent the context menu from appearing on long press of
                  links.
                </>
              }
              checked={contextMenuPreventDefault}
              setChecked={updateContextMenuPreventDefault}
            />
            <OptionCheckboxAndLabel
              label={
                <>
                  <code>-webkit-touch-callout: none</code>, to prevent the iOS
                  "context menu" from appearing on long press of links because
                  iOS doesn't support <code>contextmenu</code> events.
                </>
              }
              checked={webkitTouchCalloutNone}
              setChecked={updateWebkitTouchCalloutNone}
            />
            <OptionCheckboxAndLabel
              label={
                <>
                  <code>draggable="false"</code>, to prevent from dragging links
                  on long press on iPadOS.
                </>
              }
              checked={draggableFalse}
              setChecked={updateDraggableFalse}
            />
            <OptionSectionHeading>Event log options:</OptionSectionHeading>
            <OptionCheckboxAndLabel
              label={'Show time (ms) since previous event'}
              checked={showTimeSincePreviousEvent}
              setChecked={updateShowTimeSincePreviousEvent}
            />
            <OptionCheckboxAndLabel
              label={
                <>
                  Show time (ms) since previous <code>pointerdown</code> event
                </>
              }
              checked={showTimeSincePreviousPointerdown}
              setChecked={updateShowTimeSincePreviousPointerdown}
            />
            <OptionCheckboxAndLabel
              label={
                <>
                  Show event coordinates: <code>clientX</code>,{' '}
                  <code>clientY</code>
                </>
              }
              checked={showEventCoordinates}
              setChecked={updateShowEventCoordinates}
            />
            <OptionCheckboxAndLabel
              label={
                <>
                  Show <code>pointer</code> events
                </>
              }
              checked={showPointerEvents}
              setChecked={updateShowPointerEvents}
            />
            <OptionCheckboxAndLabel
              label={
                <>
                  Show <code>mouse</code> events
                </>
              }
              checked={showMouseEvents}
              setChecked={updateShowMouseEvents}
            />
            <OptionCheckboxAndLabel
              label={
                <>
                  Show <code>touch</code> events
                </>
              }
              checked={showTouchEvents}
              setChecked={updateShowTouchEvents}
            />
            <OptionCheckboxAndLabel
              label={
                <>
                  <code>console.log</code> all events
                </>
              }
              checked={consoleLogEvents}
              setChecked={updateConsoleLogEvents}
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
    </AppContainer>
  );
};
