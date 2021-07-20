import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaFacebook, 
        FaInstagram, 
        FaLinkedin, 
        FaTwitter } from 'react-icons/fa';
import { FooterContainer, 
        FooterWrap, 
        FooterLinksContainer, 
        FooterLinksWrapper, 
        FooterLinkItems, 
        FooterLinkTitle, 
        FooterLink, 
        SocialMedia, 
        SocialMediaWrap, 
        SocialLogo, 
        WebsiteRights, 
        SocialIcons, 
        SocialIconLink } from './FooterElements';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>Relevant Links</FooterLinkTitle>
                                    <FooterLink to="/contact">Contact Us</FooterLink>
                                    <FooterLink to="/services">Our Services</FooterLink>
                                    <FooterLink to="/contact">Contact Us</FooterLink>
                                    <FooterLink to="/services">Our Services</FooterLink>
                                    <FooterLink to="/services">Our Services</FooterLink>
                            </FooterLinkItems>

                            <FooterLinkItems>
                                <FooterLinkTitle>Relevant Links</FooterLinkTitle>
                                    <FooterLink to="/contact">Contact Us</FooterLink>
                                    <FooterLink to="/services">Our Services</FooterLink>
                                    <FooterLink to="/contact">Contact Us</FooterLink>
                                    <FooterLink to="/services">Our Services</FooterLink>
                                    <FooterLink to="/services">Our Services</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>

                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>Relevant Links</FooterLinkTitle>
                                    <FooterLink to="/contact">Contact Us</FooterLink>
                                    <FooterLink to="/services">Our Services</FooterLink>
                                    <FooterLink to="/contact">Contact Us</FooterLink>
                                    <FooterLink to="/services">Our Services</FooterLink>
                                    <FooterLink to="/services">Our Services</FooterLink>
                            </FooterLinkItems>

                            <FooterLinkItems>
                                <FooterLinkTitle>Relevant Links</FooterLinkTitle>
                                    <FooterLink to="/contact">Contact Us</FooterLink>
                                    <FooterLink to="/services">Our Services</FooterLink>
                                    <FooterLink to="/contact">Contact Us</FooterLink>
                                    <FooterLink to="/services">Our Services</FooterLink>
                                    <FooterLink to="/services">Our Services</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to='/' onClick={toggleHome} >Rolando L Rios Law</SocialLogo>
                            <WebsiteRights>Rolando Noe Rios Dev © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href="//https://www.facebook.com/rolandorioslaw/" target="blank" aria-label="Facebook">
                                    <FaFacebook />
                                </SocialIconLink>
                                <SocialIconLink href="/" target="blank" aria-label="Instagram">
                                    <FaInstagram />
                                </SocialIconLink>
                                <SocialIconLink href="/" target="blank" aria-label="Twitter">
                                    <FaTwitter />
                                </SocialIconLink>
                                <SocialIconLink href="/" target="blank" aria-label="Linked In">
                                    <FaLinkedin />
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>

            </FooterContainer>
        </>
    )
}

export default Footer
