import { Interactive } from 'react-interactive';
import { styled } from '../stitches.config';

export const Button = styled(Interactive.Button, {
  color: '$highContrast',
  WebkitTapHighlightColor: 'transparent', // required here because can't set globally in Event From demo
  '&.hover, &.active': {
    color: '$green',
    borderColor: '$green',
  },
  variants: {
    focus: {
      outline: {
        '&.focusFromKey': {
          outline: '2px solid $colors$purple',
          outlineOffset: '2px',
        },
      },
      boxShadow: {
        '&.focusFromKey': {
          boxShadow: '0 0 0 2px $colors$purple',
        },
      },
    },
  },
  defaultVariants: {
    focus: 'outline',
  },
});
