import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../src/themes/GlobalStyles";
import * as ThemeDefault from "../src/themes/json/default.json"
import * as Test from "../src/themes/json/test.json"

addDecorator(style => <><GlobalStyles />{style()}</>);

const defaultTheme = ThemeDefault.default.theme;
defaultTheme["name"] = "default";

const testTheme = Test.default.theme;
testTheme["name"] = "test";

const themes = [defaultTheme, testTheme];
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