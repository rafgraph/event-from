import { Interactive } from 'react-interactive';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as Label from '@radix-ui/react-label';
import { SunIcon, CheckIcon } from '@radix-ui/react-icons';
import { styled } from './stitches.config';

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
    checked={checked}
    onCheckedChange={onCheckedChange}
    className={className}
    disabled={disabled}
    as={Interactive}
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
  '&.focusFromKey': {
    outline: 'none',
    boxShadow: 'inset 0 0 0 1px $colors$green, 0 0 0 1px $colors$green',
  },
});

export const LabelBase = styled(Label.Root, {
  cursor: 'pointer',
  WebkitTapHighlightColor: 'transparent',
  // required because of radix checkbox bug: https://github.com/radix-ui/primitives/issues/605
  '&>input': {
    display: 'none',
  },
  variants: {
    disabled: {
      true: {
        opacity: 0.5,
        cursor: 'unset',
      },
    },
  },
});

interface InteractiveLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}
const InteractiveLink: React.VFC<InteractiveLinkProps> = ({
  href,
  className,
  children,
}) => {
  return (
    <Interactive
      as="a"
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </Interactive>
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
