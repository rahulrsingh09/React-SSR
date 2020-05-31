import React from 'react';
import {renderRoutes} from 'react-router-config';
import {FETCH_CURRENT_USER} from "./actions";
import styled from "styled-components";
import Theme, {IS_DARK_MODE} from "./containers/Theme";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = ({route}) => {
    const [isDarkMode, setIsDarkMode] = React.useState(() => false);
    React.useEffect(() => {
        const isDarkMode = localStorage.getItem(IS_DARK_MODE) === 'true' ? true : false;
        setIsDarkMode(isDarkMode)
    }, [])
    return (
        <Theme mode={isDarkMode}>
            <Container>
                <HeaderContainer>
                    <SiteWrapper>
                        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
                    </SiteWrapper>
                </HeaderContainer>
                <ContentContainer>
                    <SiteWrapper>
                        {renderRoutes(route.routes)}
                    </SiteWrapper>
                </ContentContainer>
                <FooterContainer>
                    <SiteWrapper>
                        <Footer/>
                    </SiteWrapper>
                </FooterContainer>
            </Container>
        </Theme>
    )
}

export default {
    component: App,
    loadData: ({dispatch}) => dispatch({type: FETCH_CURRENT_USER})
}

const Container = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
  background-color: ${props => props.theme.colorMappings.surfaceDesktop};
  font-family: ${props => props.theme.typography.fonts[0]};
`;

const HeaderContainer = styled.div`
  font-family: ${props => props.theme.typography.fonts[0]};
  box-shadow: ${props => `0 4px 12px 0  ${props.theme.colorMappings.shadowOnPrimary}`};
   background-color: ${props => props.theme.colorMappings.surfaceDesktop};
  ${Container} & {
    flex: 0 1 65px;
  }
`;
const ContentContainer = styled.div`
  font-family: ${props => props.theme.typography.fonts[0]};
   background-color: ${props => props.theme.colorMappings.surfaceDesktop};
  margin-top: 20px;
  ${Container} & {
    flex: 1 1 auto;
  }
`;

const FooterContainer = styled.div`
  font-family: ${props => props.theme.typography.fonts[0]};
  background-color: ${props => props.theme.colorMappings.surfaceDesktop};
  ${Container} & {
   flex: 0 1 60px;
  }
`

const SiteWrapper = styled.div`
  min-width: 1080px;
  width:75%;
  margin: auto;
`

