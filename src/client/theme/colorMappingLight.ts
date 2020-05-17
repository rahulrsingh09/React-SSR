import * as COLOR from './color';

const DEFAULT_SURFACE = '#FFF';

const textOnSecondary = {
    highEmphasis: COLOR.GREY["20"],
    mediumEmphasis: 'rgba(255, 255, 255, 0.6)',
    disabledEmphasis: 'rgba(255, 255, 255, 0.5)'
}

const textOnPrimary = {
    highEmphasis: COLOR.BLACK["100"],
    mediumEmphasis: COLOR.BLACK["60"],
    disabledEmphasis: 'rgba(21, 15, 45, 0.4)'
}

const colorMappingDefinitions = {
    surfaceDesktop: DEFAULT_SURFACE,
    primary: '#FFF',
    secondary: COLOR.BLACK["100"],
    shadowOnPrimary: COLOR.BLACK["10"]

}

export {textOnPrimary, textOnSecondary, colorMappingDefinitions};