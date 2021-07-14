import React from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, 
        NavbarContainer, 
        NavLogo, 
        MobileIcon, 
        NavMenu, 
        NavItem, 
        NavLinks, 
        NavBtn, 
        NavBtnLink} from './NavbarElements';


const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        Rolando L Rios Law
                    </NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="practice">Practice</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="cases">Cases & Press</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact">Contact</NavLinks>
                        </NavItem>
                        <NavBtn>
                            <NavBtnLink to="/">Home</NavBtnLink>
                        </NavBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
