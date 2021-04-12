import Interactive from 'react-interactive';
import { SunIcon } from '@modulz/radix-icons';
import { styled } from './stitches.config';

interface InteractiveDarkModeButtonProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}
const InteractiveDarkModeButton: React.VFC<InteractiveDarkModeButtonProps> = ({
  onClick,
  className,
}) => {
  return (
    <Interactive
      as="button"
      className={className}
      onClick={onClick}
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

export const DarkModeButton = styled(InteractiveDarkModeButton, {
  color: '$highContrast',
  width: '30px',
  height: '30px',
  '&.hover, &.active': {
    color: '$green',
  },
  '&.focusFromTab': {
    outline: '2px solid $colors$green',
    outlineOffset: '2px',
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
    >
      {children}
    </Interactive>
  );
};

export const Link = styled(InteractiveLink, {
  color: '$highContrast',
  borderBottom: '2px dotted $colors$green',
  textDecoration: 'none',
  '&.hover': {
    borderBottomStyle: 'solid',
  },
  '&.focusFromTab': {
    outline: '2px solid $colors$green',
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
