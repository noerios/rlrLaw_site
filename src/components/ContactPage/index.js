import React from 'react';
import MyMap from './Map'
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
        Column2} from './ContactElements';

const ContactPage = () => {
    return (
        <>
        <Container>
            <LogoContainer>
                <Icon to="/">Rolando L Rios Law</Icon>
            </LogoContainer>
            <ContactWrap>
                <ContactRow>
                    <Column1>
                        <TextWrapper>
                            <Topline>Contact Us</Topline>
                            <Heading>210.222.2102</Heading>
                            <Subtitle>110 Broadway, Suite 355
                                    San Antonio, TX 78205</Subtitle>
                        </TextWrapper>    
                    </Column1>
                    <Column2>
                        <FormContent>
                            <Form>
                                <MyMap />
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
