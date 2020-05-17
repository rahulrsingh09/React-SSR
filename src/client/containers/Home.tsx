import React from 'react';
import {Container, ImageTag, Rule, TextArea} from "../styledComponents";
import styled from "styled-components";
import {Hero} from "../assests/Hero";
import {HOME, IMAGES, OG_IMAGE} from "../strings";
import {Helmet} from "react-helmet";
import {navigateToExternalUrl} from "../Utils";

const Home = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>{HOME}</title>
                <meta property="og:title" content={HOME} />
                <meta property="og:image" content={OG_IMAGE} />
            </Helmet>
            <Container height={'auto'} direction={'column'}>
                <Hero/>
                <OveriddenContainer direction={'column'} margin={'10 0'} padding={'10'}>
                    <TextArea>
                        HopeFully the Diagram gives Justice to SSR, Will Not dive into naming schemes SSR, Universal or Isomorphic. All relates to the same principles.
                        For Detailed Analysis of how this page functions as a boilerplate please look at the Git Repo.
                    </TextArea>
                    <Small_Header>
                        A quick insight on how the Page is powered by
                        <Rule/>
                    </Small_Header>
                    <TextArea>
                        We are using <ImageTag src={IMAGES.NODEJS.image} onClick={navigateToExternalUrl(IMAGES.NODEJS.link)}/> and <ImageTag src={IMAGES.EXPRESS.image} onClick={navigateToExternalUrl(IMAGES.EXPRESS.link)}/> for our server side computation,
                        <ImageTag src={IMAGES.REACT.image} onClick={navigateToExternalUrl(IMAGES.REACT.link)}/> is used on both the server and client by getting help from <ImageTag src={IMAGES.WEBPACK.image} onClick={navigateToExternalUrl(IMAGES.WEBPACK.link)}/>
                        & <ImageTag src={IMAGES.BABEL.image} onClick={navigateToExternalUrl(IMAGES.BABEL.link)}/>. We are using <ImageTag src={IMAGES.TYPESCRIPT.image} onClick={navigateToExternalUrl(IMAGES.TYPESCRIPT.link)}/> for maintainability . This is paired with
                        <ImageTag src={IMAGES.REDUX.image} onClick={navigateToExternalUrl(IMAGES.REACT.link)}/> & <ImageTag src={IMAGES.REDUX_SAGA.image} onClick={navigateToExternalUrl(IMAGES.REDUX_SAGA.link)}/> for efficient state management, we have the same code running
                        on server and client to get us the best velocity. This all is paired with <ImageTag src={IMAGES.HTML5.image} onClick={navigateToExternalUrl(IMAGES.HTML5.link)}/>, <ImageTag src={IMAGES.CSS3.image} onClick={navigateToExternalUrl(IMAGES.CSS3.link)}/>
                        and <ImageTag src={IMAGES.STYLED_COMP2.image} onClick={navigateToExternalUrl(IMAGES.STYLED_COMP2.link)}/> for the best CX and theming experience.
                        The first request is served by our Node server serving plain HTML and post client side rehydration of React and Redux, <ImageTag src={IMAGES.REACT.image} onClick={navigateToExternalUrl(IMAGES.REACT.link)}/> on client side
                        kicks in to give us a SPA experience.
                    </TextArea>
                </OveriddenContainer>
            </Container>
        </React.Fragment>
    )
}


const OveriddenContainer = styled(Container)`
 box-shadow: ${props => `0 0 6px ${props.theme.colorMappings.shadowOnPrimary}`};
`

const Small_Header = styled(TextArea)`
  font-size: ${props => props.theme.typography.fontSizes.small};
  text-align: center;
  text-transform: uppercase;
`;

export default {
    component: Home
}