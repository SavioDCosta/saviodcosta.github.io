import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';
import { Container, Wrapper, Title, Description, ContactForm, ContactTitle, ContactInput, ContactInputMessage, ContactButton } from './ContactStyle';

const Contact = () => {
    const [open, setOpen] = React.useState(false);
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_1kqdxks', 'template_o9l3dl9', form.current, 'AvdkUCN7zOw9Mgi_-')
            .then((result) => {
                setOpen(true);
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            }
        );
    }

    return (
        <Container id = 'contact'>
            <Wrapper>
            <Title>Contact</Title>
            <Description>Feel free to reach out to me for any questions or opportunities!</Description>
            <ContactForm ref = {form} onSubmit = {handleSubmit}>
                <ContactTitle>Email Me 🚀</ContactTitle>
                <ContactInput placeholder = 'Your Email' name = 'from_email' />
                <ContactInput placeholder = 'Your Name' name = 'from_name' />
                <ContactInput placeholder = 'Subject' name = 'subject' />
                <ContactInputMessage placeholder = 'Message' rows = '4' name = 'message' />
                <ContactButton type = 'submit' value = 'Send' />
            </ContactForm>
            <Snackbar
                open = {open}
                autoHideDuration = {6000}
                onClose = {() => setOpen(false)}
                message = 'Email sent successfully!'
                severity = 'success'
            />
            </Wrapper>
        </Container>
    );
};

export default Contact;