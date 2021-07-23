import React from 'react';
import { Container, 
        FormContent, 
        ContactWrap, 
        Icon, 
        Form,  
        LogoContainer, 
        ContactRow, 
        Column1, 
        TextWrapper, 
        Topline, 
        Heading, 
        Subtitle, 
        Column2, Img} from './ContactElements';

import Building from '../../images/building.jpg'

const ContactPage = () => {
    return (
        <>
        <Container>
            <LogoContainer>
                <Icon to="/">Law Office of Rolando L Rios</Icon>
            </LogoContainer>
            <ContactWrap>
                <ContactRow>
                    <Column1>
                        <TextWrapper>
                            <Topline>Contact Us</Topline>
                            <Heading>Law Office of</Heading>
                            <Heading>Rolando L Rios</Heading>
                            <Subtitle>Phone: 210.222.2102</Subtitle>
                            <Subtitle>Email: srios@rolandorioslaw.com</Subtitle>
                            <Subtitle>110 Broadway, Suite 355 San Antonio, TX 78205</Subtitle>
                        </TextWrapper>    
                    </Column1>
                    <Column2>
                        <FormContent>
                            <Form>
                                <Img src={Building} alt="Law Office Building"/>
                            </Form>
                        </FormContent>
                    </Column2>
                </ContactRow>    
            </ContactWrap>
        </Container>
            
        </>
    )
}

export default ContactPage
