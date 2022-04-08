import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../src/themes/GlobalStyles";
import { ToastContainer } from 'react-toastify';
import { AllThemes } from '../src/themes/Theme';

addDecorator(style => <><GlobalStyles />{style()}<ToastContainer /></>);

const allThemes = AllThemes().themes;
let themes = [];
for(let t in allThemes){ themes.push(allThemes[t]); }
console.log(themes);
addDecorator(withThemesProvider(themes), ThemeProvider);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}