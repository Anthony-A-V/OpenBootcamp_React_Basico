import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contact.class';

const ContactComponent = ({ contact, connect, remove }) => {
  function contactConnectedIcon() {
    if (contact.isConnected) {
      return (
        <i
          onClick={() => connect(contact)}
          className="bi-toggle-on task-action"
          style={{ color: 'green', cursor: 'pointer' }}
        ></i>
      );
    } else {
      return (
        <i
          onClick={() => connect(contact)}
          className="bi-toggle-off task-action"
          style={{ color: 'grey', cursor: 'pointer' }}
        ></i>
      );
    }
  }

  return (
    <tr className="fw-normal">
      <td>
        <span className="ms-2"> {contact.name}</span>
      </td>
      <td className="align-middle">
        <span> {contact.lastName}</span>
      </td>
      <td className="align-middle">
        <span> {contact.email}</span>
      </td>
      <td className="align-middle">
        {/* Execution of function to return icon depending on completion */}
        {contact.isConnected ? 'yes' : 'no'}
        {contactConnectedIcon()}
        <i
          className="bi-trash"
          style={{ color: 'tomato', cursor: 'pointer' }}
          onClick={() => remove(contact)}
        ></i>
      </td>
    </tr>
  );
};

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact).isRequired,
};

export default ContactComponent;
