import Interactive from 'react-interactive';
import { SunIcon } from '@modulz/radix-icons';
import { styled } from './stitches.config';

interface DarkModeToggleProps {
  onClick: () => void;
  className?: any;
}
const DarkModeToggle: React.VFC<DarkModeToggleProps> = ({
  onClick,
  className,
  ...props
}) => {
  return (
    <Interactive
      {...props}
      className={className.toString()}
      onClick={onClick}
      as="button"
      hover={{ className: 'hover' }}
      active={{ className: 'active' }}
      focusFromTab={{
        className: 'focusFromTab',
        style: {
          outline: null,
          outlineOffset: null,
        },
      }}
      touchActiveTapOnly
    >
      <SunIcon width="30" height="30" />
    </Interactive>
  );
};

export const StyledDarkModeToggle = styled(DarkModeToggle, {
  color: '$highContrast',
  width: '30px',
  height: '30px',
  '&.hover, &.active': {
    color: '$green',
  },

  '&.focusFromTab': {
    // have separate outlineColor b/c tokens don't work in outline shorthand
    // https://github.com/modulz/stitches/issues/103
    outlineColor: '$green',
    outline: '2px solid',
    outlineOffset: '2px',
  },
});

interface InteractiveLinkProps {
  children: React.ReactNode;
  href: string;
  className?: any;
}
const InteractiveLink: React.VFC<InteractiveLinkProps> = (props) => {
  return (
    <Interactive
      {...props}
      className={props.className.toString()}
      as="a"
      hover={{ className: 'hover' }}
      active="hover"
      focusFromTab={{
        className: 'focusFromTab',
        style: {
          outline: null,
          outlineOffset: null,
        },
      }}
      touchActiveTapOnly
      target="_blank"
      rel="noopener noreferrer"
    />
  );
};

export const StyledInteractiveLink = styled(InteractiveLink, {
  color: '$highContrast',
  borderBottom: '2px dotted $green',
  textDecoration: 'none',

  '&.hover': {
    borderBottomStyle: 'solid',
  },

  '&.focusFromTab': {
    // have separate outlineColor b/c tokens don't work in outline shorthand
    // https://github.com/modulz/stitches/issues/103
    outlineColor: '$green',
    outline: '2px solid',
    outlineOffset: '2px',
  },

  variants: {
    type: {
      lowContrast: {
        color: '$lowContrast',
        fontSize: '14px',
        borderBottomWidth: '1px',

        '&.hover': {
          color: '$highContrast',
        },
      },
    },
  },
});

interface InteractiveButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: any;
}
const InteractiveButton: React.VFC<InteractiveButtonProps> = (props) => {
  return (
    <Interactive
      {...props}
      className={props.className.toString()}
      as="div"
      hover={{ className: 'hover' }}
      active="hover"
      focusFromTab={{
        className: 'focusFromTab',
        style: {
          outline: null,
          outlineOffset: null,
        },
      }}
      touchActiveTapOnly
    />
  );
};

export const StyledInteractiveButton = styled(InteractiveButton, {
  color: '$highContrast',
  border: '2px solid $highContrast',
  width: '100%',
  height: '42px',
  lineHeight: '36px',
  fontSize: '18px',
  textAlign: 'center',
  margin: '25px 0',
  userSelect: 'none',

  '&.hover': {
    color: '$green',
    borderColor: '$green',
  },

  '&.focusFromTab': {
    // have separate outlineColor b/c tokens don't work in outline shorthand
    // https://github.com/modulz/stitches/issues/103
    outlineColor: '$green',
    outline: '2px solid',
    outlineOffset: '2px',
  },
});
