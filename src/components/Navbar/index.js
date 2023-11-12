import React from 'react';
import { useTheme } from 'styled-components';
import { ImProfile } from 'react-icons/im';
import { FaBars } from 'react-icons/fa';
import { bio } from '../../data/constants';
import { Nav, NavbarContainer, NavLogo, StyledLink, Span, MobileIcon, NavItems, NavLink, ButtonContainer, GitHubButton, MobileMenu, MobileLink } from './NavbarStyle';

const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const theme = useTheme();
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to = '/'>
                    <StyledLink>
                        <ImProfile size = '2.5rem'/><Span>Portfolio</Span>
                    </StyledLink>
                </NavLogo>
                <MobileIcon>
                    <FaBars 
                        onClick={() => {
                            setIsOpen(!isOpen);
                        }}
                    />
                </MobileIcon>
                <NavItems>
                    <NavLink href = '#about'>About</NavLink>
                    <NavLink href = '#skills'>Skills</NavLink>
                    <NavLink href = '#experience'>Experience</NavLink>
                    <NavLink href = '#projects'>Projects</NavLink>
                    <NavLink href = '#education'>Education</NavLink>
                    <NavLink href = '#contact'>Contact</NavLink>
                </NavItems>
                <ButtonContainer>
                    <GitHubButton href = {bio.github}>GitHub Profile</GitHubButton>
                </ButtonContainer>
                {
                    isOpen && 
                    <MobileMenu isOpen = {isOpen}>
                        <MobileLink 
                            href = '#about' 
                            onClick={() => {
                                setIsOpen(!isOpen)
                            }}>About
                        </MobileLink>
                        <MobileLink 
                            href = '#skills' 
                            onClick={() => {
                                setIsOpen(!isOpen)
                            }}>Skills
                        </MobileLink>
                        <MobileLink 
                            href = '#experience' 
                            onClick={() => {
                                setIsOpen(!isOpen)
                            }}>Experience
                        </MobileLink>
                        <MobileLink 
                            href = '#projects' 
                            onClick={() => {
                                setIsOpen(!isOpen)
                            }}>Projects
                        </MobileLink>
                        <MobileLink 
                            href = '#education' 
                            onClick={() => {
                                setIsOpen(!isOpen)
                            }}>Education
                        </MobileLink>
                        <MobileLink 
                            href = '#contact' 
                            onClick={() => {
                                setIsOpen(!isOpen)
                            }}>Contact
                        </MobileLink>
                        <GitHubButton 
                            style = {{
                                padding: '10px 16px',
                                background: `${theme}.primary`,
                                color: 'white',
                                width: 'max-content',
                            }}
                            href = {bio.github}
                            target = '_blank'>GitHub Profile
                        </GitHubButton>
                    </MobileMenu>
                }
            </NavbarContainer>
        </Nav>
    );
};

export default Navbar;