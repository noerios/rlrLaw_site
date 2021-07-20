import React, {useState, useEffect} from 'react';
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


const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = ()=> {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/">
                        Rolando L Rios Law
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="firm">Firm</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="practice">Practice</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="cases">Cases & Press</NavLinks>
                        </NavItem>
                        <NavBtn>
                            <NavBtnLink to="contact">Contact</NavBtnLink>
                        </NavBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
