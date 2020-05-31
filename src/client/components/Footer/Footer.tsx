import * as React from 'react';
import {Container, ImageTag, TextArea} from '../../styledComponents'
import styled from "styled-components";
import {IMAGES} from "../../strings";
import {navigateToExternalUrl} from "../../Utils";

interface IFooterProps {
}

export const Footer = ({}: IFooterProps): React.ReactElement<IFooterProps> => {
    return (
        <Container padding={'0 20px'}>
            <TextArea>
                {`{^;}`} CODING !!
            </TextArea>
            <RightSection>
                <ImageTag src={IMAGES.STACK_OVERFLOW.image} onClick={navigateToExternalUrl(IMAGES.STACK_OVERFLOW.link)}width={'130'} height={'44'} />
                <ImageTag src={IMAGES.LINKEDIN.image} onClick={navigateToExternalUrl(IMAGES.LINKEDIN.link)}width={'50'} height={'50'} />
            </RightSection>
        </Container>
    );
};

const RightSection = styled.div`
  margin-left: auto;
  display:flex;
  align-items: center;
`

Footer.defaultProps = {};

export default Footer;
