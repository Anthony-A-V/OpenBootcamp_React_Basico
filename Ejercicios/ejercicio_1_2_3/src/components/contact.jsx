import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contact.class';
import ContactConected from './contactConected';

const ContactComponent = () => {
  const contact = new Contact('Anthony', 'Anguiz', 'anthony.anguizvargas@gmail.com', false);

  return (
    <div>
      <h4>Nombre: {contact.name}</h4>
      <h4>Apellido: {contact.lastName}</h4>
      <h4>Email: {contact.email}</h4>
      <ContactConected contact={contact}></ContactConected>
    </div>
  );
};

export default ContactComponent;
