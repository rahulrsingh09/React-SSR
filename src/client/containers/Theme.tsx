import * as React from 'react';
import {ThemeProvider} from "styled-components";
import {DARK_THEME, LIGHT_THEME} from "../theme/theme"

export const IS_DARK_MODE = 'IS_DARK_MODE';
const Theme = ({children, mode}) => {
    const appliedTheme = mode ? DARK_THEME : LIGHT_THEME;
    return (
        <ThemeProvider theme={appliedTheme}>{children}</ThemeProvider>
    )
};

export default Theme;