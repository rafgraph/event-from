import { createStyled } from '@stitches/react';

export const { styled, css } = createStyled({
  prefix: '',
  tokens: {
    colors: {
      $pageBackground: 'rgb(240,240,240)',
      $highContrast: 'rgb(0,0,0)',
      $lowContrast: 'rgb(128,128,128)',
      $red: 'hsl(0,100%,50%)',
      $orange: 'hsl(30,100%,50%)',
      $yellow: 'hsl(51,100%,40%)',
      $green: 'hsl(120,100%,30%)',
      $blueGreen: 'hsl(180,100%,35%)',
      $blue: 'hsl(240,100%,50%)',
      $purple: 'hsl(270,100%,60%)',
    },
  },
  breakpoints: {},
  utils: {},
});

export const darkThemeClass = css.theme({
  colors: {
    $pageBackground: 'rgb(32,32,32)',
    $highContrast: 'rgb(192,192,192)',
    $lowContrast: 'rgb(136,136,136)',
    $red: 'hsl(0,100%,50%)',
    $orange: 'hsl(30,90%,50%)',
    $yellow: 'hsl(60,88%,50%)',
    $green: 'hsl(120,85%,42%)',
    $blueGreen: 'hsl(180,100%,50%)',
    $blue: 'hsl(210,100%,60%)',
    $purple: 'hsl(270,85%,60%)',
  },
});

export const globalStyles = css.global({
  'button, input': {
    all: 'unset',
  },
  'body, div, span, a, p, h1, h2, h3, code, button, form, input': {
    margin: 0,
    border: 0,
    padding: 0,
    boxSizing: 'inherit',
    font: 'inherit',
    fontWeight: 'inherit',
    textDecoration: 'inherit',
    textAlign: 'inherit',
    color: 'inherit',
    background: 'transparent',
  },
  html: {
    height: '100%',
  },
  body: {
    height: '100%',
    color: '$highContrast',
    fontFamily: 'system-ui, Helvetica Neue, sans-serif',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    fontSize: '16px',
    boxSizing: 'border-box',
    textSizeAdjust: 'none',
  },
  '#root': {
    minHeight: '100%',
    backgroundColor: '$pageBackground',
  },
});