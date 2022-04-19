import React from 'react';
import '../../styles/Contact.css'
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  MessageInput,
  FormButton,
  Text
} from './ContactElements';

const Contact = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>Remy Duijn</Icon>
          <FormContent>
            <Form action='#'>
              <FormH1>Let's get in touch!</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required />
              <FormLabel htmlFor='for'>Message</FormLabel>
              <textarea type='text' required />
              <FormButton type='submit'>Continue</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Contact;
