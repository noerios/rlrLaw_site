import React from 'react';
import { SidebarContainer, 
        Icon, 
        CloseIcon, 
        SidebarWrapper, 
        SidebarMenu, 
        SidebarLink, 
        SideBtnWrap, 
        SidebarRoute
    } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="practice" onClick={toggle}>Practice</SidebarLink>
                    <SidebarLink to="cases" onClick={toggle}>Cases & Press</SidebarLink>
                    <SidebarLink to="contact" onClick={toggle}>Contact</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/'>Home</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
