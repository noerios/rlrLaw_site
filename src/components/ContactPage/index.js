import React from 'react';
import { Container, FormContent, FormWrap, Icon, Form, FormH1} from './ContactElements';

const ContactPage = () => {
    return (
        <>
        
            <Container>
            
                <FormWrap>
                    <Icon to="/">Rolando L Rios Law</Icon>
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
