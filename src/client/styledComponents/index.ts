import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: ${props => props.direction ? props.direction : 'row'};
  height: ${props => props.height ? props.height : '100%'};
  padding: ${props => props.padding ? props.padding  : 'initial'};
  margin: ${props => props.margin ? props. margin : 'initial'};
  font-family: ${props => props.theme.typography.fonts[0]};
  box-sizing: border-box;
  color: ${props => props.theme.colorMappings.textOnPrimary.highEmphasis};
`;

export const Logo = styled.h3`
   font-family: ${props => props.theme.typography.fonts[0]};
   color: ${props => props.theme.colorMappings.textOnPrimary.highEmphasis};
   font-weight:600;
   &:first-letter{
     font-size:24px;
   }
`;

export const ImageTag = styled.img`
   width: ${props => props.width? props.width : '30px'};
   height: ${props => props.height? props.height : '30px'};
   margin: 0 5px;
   box-sizing: border-box;
   cursor: pointer;
   fill: ${props => props.theme.colorMappings.textOnPrimary.highEmphasis};
   
`
export const HeroImage = styled.svg`
  fill: ${props => `${props.theme.colorMappings.textOnPrimary.highEmphasis}`};
`

export const Rule = styled.hr`
  border-top: ${props => `1px solid ${props.theme.colorMappings.shadowOnPrimary}`};
  width: 70%;
  align-self: center;
`

export const TextArea = styled.span`
  font-family: ${props => props.theme.typography.fonts[0]};
  box-sizing: border-box;
  display: inline-block;
  margin-top: 10px;
  text-align: justify;
  line-height: ${props => props.theme.typography.line_height};
`;

export const Anchor = styled.a`
 color: inherit;
`