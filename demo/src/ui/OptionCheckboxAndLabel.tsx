import * as React from 'react';
import { createInteractive } from 'react-interactive';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as Label from '@radix-ui/react-label';
import { CheckIcon } from '@radix-ui/react-icons';
import { styled } from '../stitches.config';

const OptionLabel = styled(createInteractive(Label.Root), {
  display: 'block',
  margin: '10px 0',
  cursor: 'pointer',
  WebkitTapHighlightColor: 'transparent',
  '& code': {
    backgroundColor: '$backgroundContrast',
    padding: '0 5px',
    borderRadius: '5px',
  },

  // style checkbox (which renders a button) when label is hovered/active
  '&.hover>button:not(.disabled), &.active>button:not(.disabled)': {
    borderColor: '$green',
    boxShadow: '0 0 0 1px $colors$green',
  },
  '&.active>button:not(.disabled)': {
    color: '$green',
  },
  '&.disabled': {
    opacity: 0.5,
    cursor: 'unset',
  },
});

const OptionCheckbox = styled(createInteractive(Checkbox.Root), {
  verticalAlign: 'top',
  marginTop: '1px',
  marginRight: '4px',
  appearance: 'none',
  backgroundColor: 'transparent',
  border: '1px solid $highContrast',
  width: '17px',
  height: '17px',
  borderRadius: '2px',

  // to center the check icon vertically because line-height of label
  // is greater than checkbox height because of code blocks/monospace font
  display: 'inline-flex',
  alignItems: 'center',

  // hover and active are styled in label so styles are applied when label is hovered/active
  // '&.hover, &.active': {...},
  '&.focusFromKey': {
    borderColor: '$purple',
    boxShadow: '0 0 0 1px $colors$purple',
  },
  '&.keyActive': {
    color: '$green',
    borderColor: '$green',
    boxShadow: '0 0 0 1px $colors$green',
  },
});

interface OptionCheckboxAndLabelProps {
  label:
    | React.ReactNode
    | ((arg: {
        setDisableCheckbox: React.Dispatch<React.SetStateAction<boolean>>;
      }) => React.ReactNode);
  checked: boolean;
  disabled?: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

export const OptionCheckboxAndLabel: React.VFC<OptionCheckboxAndLabelProps> = ({
  label,
  checked,
  disabled,
  setChecked,
}) => {
  const [disableCheckbox, setDisableCheckbox] = React.useState(false);

  return (
    <OptionLabel disabled={disabled}>
      <OptionCheckbox
        disabled={disabled || disableCheckbox}
        checked={checked}
        onCheckedChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setChecked(event.target.checked)
        }
      >
        <Checkbox.Indicator as={CheckIcon} width="15" height="15" />
      </OptionCheckbox>
      {typeof label === 'function' ? label({ setDisableCheckbox }) : label}
    </OptionLabel>
  );
};
