import { Interactive, InteractiveExtendableProps } from 'react-interactive';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as Label from '@radix-ui/react-label';
import { SunIcon, CheckIcon } from '@radix-ui/react-icons';
import { styled } from './stitches.config';
import React from 'react';

////////////////////////////////////////

interface InteractiveButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  children: React.ReactNode;
}
const InteractiveButton: React.VFC<InteractiveButtonProps> = ({
  onClick,
  className,
  children,
}) => (
  <Interactive as="button" className={className} onClick={onClick}>
    {children}
  </Interactive>
);
export const ButtonBase = styled(InteractiveButton, {
  color: '$highContrast',
  WebkitTapHighlightColor: 'transparent',
  '&.hover, &.active': {
    color: '$green',
  },
  '&.focusFromKey': {
    outline: '2px solid $colors$green',
    outlineOffset: '2px',
  },
});

////////////////////////////////////////

// checkbox and label usage:
// <LabelBase disabled={disabled}>
//   <CheckboxBase
//     disabled={disabled}
//     checked={checked}
//     onCheckedChange={(event: React.ChangeEvent<HTMLInputElement>) =>
//       setChecked(event.target.checked)
//     }
//   />
//   Label text here
//  </LabelBase>

interface InteractiveCheckboxProps {
  checked: boolean;
  onCheckedChange: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  disabled?: boolean;
}

const InteractiveCheckbox: React.VFC<InteractiveCheckboxProps> = ({
  checked,
  onCheckedChange,
  className,
  disabled,
}) => (
  <Checkbox.Root
    as={Interactive}
    checked={checked}
    onCheckedChange={onCheckedChange}
    className={className}
    disabled={disabled}
  >
    <Checkbox.Indicator as={CheckIcon} />
  </Checkbox.Root>
);

export const CheckboxBase = styled(InteractiveCheckbox, {
  appearance: 'none',
  backgroundColor: 'transparent',
  boxShadow: 'inset 0 0 0 1px $colors$highContrast',
  width: '15px',
  height: '15px',
  borderRadius: '2px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  // hover and active are styled in LabelBase so styles are applied when label is hovered/active
  // '&.hover, &.active': {...},
  '&.focusFromKey': {
    outline: 'none',
    boxShadow: 'inset 0 0 0 1px $colors$green, 0 0 0 1px $colors$green',
  },
  '&.keyActive': {
    color: '$green',
  },
});

const InteractiveLabel: React.VFC<
  InteractiveExtendableProps<typeof Label.Root>
> = (props) => <Interactive {...props} as={Label.Root} />;

export const LabelBase = styled(InteractiveLabel, {
  cursor: 'pointer',
  WebkitTapHighlightColor: 'transparent',
  // style CheckboxBase (which renders a button) when label is hovered/active
  '&.hover>button:not(.disabled), &.active>button:not(.disabled)': {
    boxShadow: 'inset 0 0 0 1px $colors$green, 0 0 0 1px $colors$green',
  },
  '&.active>button:not(.disabled)': {
    color: '$green',
  },
  '&.disabled': {
    opacity: 0.5,
    cursor: 'unset',
  },
  // required because of radix checkbox bug: https://github.com/radix-ui/primitives/issues/605
  '&>input': {
    display: 'none',
  },
});

////////////////////////////////////////

const InteractiveLink: React.VFC<InteractiveExtendableProps<'a'>> = (props) => {
  return (
    <Interactive {...props} as="a" target="_blank" rel="noopener noreferrer" />
  );
};
export const Link = styled(InteractiveLink, {
  color: '$highContrast',
  borderBottom: '1px dotted $colors$green',
  textDecoration: 'none',
  WebkitTapHighlightColor: 'transparent',
  '&.hover, &.active': {
    borderBottomStyle: 'solid',
  },
  '&.focusFromKey': {
    outline: '2px solid $colors$green',
    outlineOffset: '2px',
  },
  variants: {
    type: {
      lowContrast: {
        color: '$lowContrast',
        fontSize: '14px',
        '&.hover, &.active': {
          color: '$highContrast',
        },
      },
    },
  },
});

////////////////////////////////////////

interface DarkModeButtonBaseProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}
const DarkModeButtonBase: React.VFC<DarkModeButtonBaseProps> = ({
  onClick,
  className,
}) => (
  <ButtonBase className={className} onClick={onClick}>
    <SunIcon width="30" height="30" />
  </ButtonBase>
);
export const DarkModeButton = styled(DarkModeButtonBase, {
  width: '30px',
  height: '30px',
});
