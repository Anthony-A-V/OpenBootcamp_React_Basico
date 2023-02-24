import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contact.class';

const ContactForm = ({ add }) => {
  const nameRef = useRef('');
  const lastNameRef = useRef('');
  const emailRef = useRef('');

  function addContact(e) {
    e.preventDefault();
    const newContact = new Contact(
      nameRef.current.value,
      lastNameRef.current.value,
      emailRef.current.value,
      false,
    );
    add(newContact);
  }

  return (
    <form onSubmit={addContact}>
      <div className="form-outline flex-fill"></div>
      <div className="form-outline flex-fill">
        <input
          ref={nameRef}
          id="inputName"
          type="text"
          className="form-control form-control-lg"
          required
          autoFocus
          placeholder="Contact Name"
        />
        <input
          ref={lastNameRef}
          id="inputDescription"
          type="text"
          className="form-control form-control-lg"
          required
          placeholder="Contact LastName"
        />
        <input
          ref={emailRef}
          id="inputDescription"
          type="text"
          className="form-control form-control-lg"
          required
          placeholder="Contact Email"
        />
      </div>
      <button type="submit" className="btn btn-success btn-lg ms-2">
        Add
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  add: PropTypes.func.isRequired,
};

export default ContactForm;
