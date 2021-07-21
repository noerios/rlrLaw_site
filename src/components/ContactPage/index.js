import React from 'react';
import { Container, FormContent, FormWrap, Icon, Form, FormH1, LogoContainer} from './ContactElements';

const ContactPage = () => {
    return (
        <>
        <Container>
            <LogoContainer>
                <Icon to="/">Rolando L Rios Law</Icon>
            </LogoContainer>
            <FormWrap>
                
                <FormContent>
                    <Form action="#">
                        <FormH1>Contact Us</FormH1>
                    </Form>
            </FormContent>
                </FormWrap>
            </Container>
            
        </>
    )
}

export default ContactPage
