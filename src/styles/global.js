import { createGlobalStyle, css } from 'styled-components';
// import { typography, color } from './styles'

export const fontUrl = 'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900';

export const bodyStyles = css`
  /* global styles */
`;

export const GlobalStyle = createGlobalStyle`
 body {
   ${bodyStyles}
 }
`;