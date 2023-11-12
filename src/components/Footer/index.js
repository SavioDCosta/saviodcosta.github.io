import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { bio } from '../../data/constants';
import { FooterContainer, FooterWrapper, Logo, Nav, NavLink, SocialMediaIcons, SocialMediaIcon, Copyright } from './FooterStyle';

function Footer() {
    return (
        <FooterContainer>
            <FooterWrapper>
                <Logo>Savio DCosta</Logo>
                <Nav>
                    <NavLink href = '#about'>About</NavLink>
                    <NavLink href = '#skills'>Skills</NavLink>
                    <NavLink href = '#experience'>Experience</NavLink>
                    <NavLink href = '#projects'>Projects</NavLink>
                    <NavLink href = '#education'>Education</NavLink>
                    <NavLink href = '#contact'>Contact</NavLink>
                </Nav>
                <SocialMediaIcons>
                    <SocialMediaIcon href = {bio.linkedin} target = 'display'><LinkedInIcon /></SocialMediaIcon>
                    <SocialMediaIcon href = {bio.github} target = 'display'><GitHubIcon /></SocialMediaIcon>
                </SocialMediaIcons>
                <Copyright>
                    &copy; 2023 Savio DCosta. All rights reserved.
                </Copyright>
            </FooterWrapper>
        </FooterContainer>
    );
};

export default Footer;