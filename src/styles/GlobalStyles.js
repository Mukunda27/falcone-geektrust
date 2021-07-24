import { createGlobalStyle } from "styled-components";

// Create a `GlobalStyles` component.
// I usually already have this, to include a CSS
// reset, set border-box, and other global concerns.
export const GlobalStyles = createGlobalStyle`
  :root {
    --color-text: hsl(0deg, 0%, 100%);
    --color-background: hsl(210deg, 30%, 8%);
    --color-blurred-background: #1C242E;
    --color-primary: hsl(230deg, 100%, 67%);
    --color-secondary: hsl(333deg, 100%, 52%);

    --border-radius: 8px;

    --font-weight-bold: 700;
    --font-weight-medium: 500;
    --font-weight-light: 300;

    --font-size-sm: 14px;
    --font-size-lg: 18px;
  }

  html {
    font-size: 14px;
    color: var(----color-text) !important;

  }

  *,
  ::after,
  ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    background-color: var(--color-background);
    font-family: "Poppins", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  @media screen and (min-width: 320px) {
    html {
      font-size: calc(
        var(--font-size-sm) + var(--font-size-diff) * ((100vw - 320px) / 680)
      );
    }
  }

  @media screen and (min-width: 1000px) {
    html {
      font-size: var(--font-size-lg);
    }
  }
`;
