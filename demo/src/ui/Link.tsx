import * as React from 'react';
import { Interactive } from 'react-interactive';
import { styled } from '../stitches.config';

const StyledLink = styled(Interactive.A, {
  color: '$highContrast',
  WebkitTapHighlightColor: 'transparent', // required here because can't set globally in Event From demo

  // can't use shorthand for textDecoration because of bug in Safari v14
  // textDecoration: 'underline $colors$green dotted from-font',
  textDecorationLine: 'underline',
  textDecorationStyle: 'dotted',
  textDecorationColor: '$green',
  textDecorationThickness: 'from-font',

  padding: '0 1px',
  margin: '0 -1px',

  '&.hover': {
    textDecorationColor: '$green',
    textDecorationStyle: 'solid',
  },
  '&.active': {
    textDecorationColor: '$green',
    textDecorationStyle: 'solid',
    color: '$green',
  },
  '&.focusFromKey': {
    outline: '2px solid $colors$purple',
    outlineOffset: '2px',
  },
});

interface LinkProps extends React.ComponentPropsWithoutRef<typeof StyledLink> {
  newWindow?: boolean;
}

export const Link: React.VFC<LinkProps> = ({ newWindow = true, ...props }) => (
  <StyledLink
    {...props}
    target={newWindow ? '_blank' : undefined}
    rel={newWindow ? 'noopener noreferrer' : undefined}
  />
);
