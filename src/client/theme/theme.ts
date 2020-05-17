import * as LIGHT from './colorMappingLight';
import * as DARK from './colorMappingDark';

const LIGHT_THEME = {
    colorMappings: {
        textOnSecondary: LIGHT.textOnSecondary,
        textOnPrimary:LIGHT.textOnPrimary,
        ...LIGHT.colorMappingDefinitions
    },
    typography: {
        fonts: ["Lato","sans-serif"],
        fontSizes: {
            small: "1em",
            medium: "1.5em",
            large: "3em"
        },
        line_height:"1.5em"
    }
}

const DARK_THEME = {
    colorMappings: {
        textOnSecondary: DARK.textOnSecondary,
        textOnPrimary:DARK.textOnPrimary,
        ...DARK.colorMappingDefinitions
    },
    typography: {
        fonts: ["Lato","sans-serif"],
        fontSizes: {
            small: "1em",
            medium: "1.5em",
            large: "3em"
        },
        line_height:"1.5em"
    }
}

export {LIGHT_THEME, DARK_THEME}