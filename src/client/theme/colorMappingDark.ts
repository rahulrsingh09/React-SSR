import * as COLOR from './color';

const DEFAULT_SURFACE = '#1c1e21';

const textOnSecondary = {
    highEmphasis: COLOR.BLACK["100"],
    mediumEmphasis: COLOR.BLACK["60"],
    disabledEmphasis: 'rgba(21, 15, 45, 0.4)'
}

const textOnPrimary = {
    highEmphasis: COLOR.GREY["0"],
    mediumEmphasis: 'rgba(255, 255, 255, 0.6)',
    disabledEmphasis: 'rgba(255, 255, 255, 0.5)'
}

const colorMappingDefinitions = {
    surfaceDesktop: DEFAULT_SURFACE,
    primary: '#242526',
    secondary: COLOR.GREY["10"],
    shadowOnPrimary: COLOR.BLACK["80"]

}

export {textOnPrimary, textOnSecondary, colorMappingDefinitions};