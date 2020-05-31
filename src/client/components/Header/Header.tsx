import * as React from 'react';
import {Container, ImageTag, Logo} from '../../styledComponents'
import {IMAGES, LogoConstant} from "../../strings";
import DarkModeToggle from "react-dark-mode-toggle";
import styled from "styled-components";
import {IS_DARK_MODE} from "../../containers/Theme";
import {navigateToExternalUrl} from "../../Utils";

interface IHeaderProps {
    setIsDarkMode: (isDarkMode: boolean) => void,
    isDarkMode: boolean
}

export const Header = ({isDarkMode, setIsDarkMode}: IHeaderProps): React.ReactElement<IHeaderProps> => {
    const toggleMode = () => {
        localStorage.setItem(IS_DARK_MODE, ''+!isDarkMode);
        setIsDarkMode(!isDarkMode)
    }
    return (
        <Container padding={'0 20px'}>
            <React.Fragment>
                <Logo>{LogoConstant.FIRST}</Logo>
                <Logo>&nbsp;{LogoConstant.SECOND}</Logo>
            </React.Fragment>
            <RightSection>
                <ImageTag src={IMAGES.GIT.image} onClick={navigateToExternalUrl(IMAGES.GIT.link)} width={'30'} height={'30'} />
                <DarkModeToggle
                    onChange={toggleMode}
                    checked={isDarkMode}
                    size={40}
                />
            </RightSection>
        </Container>
    );
};

const RightSection = styled.div`
  margin-left: auto;
  display:flex;
  align-items: center;
`

Header.defaultProps = {};

export default Header;
