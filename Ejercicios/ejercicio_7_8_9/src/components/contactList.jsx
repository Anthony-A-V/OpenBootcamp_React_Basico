import React, { useState } from 'react';
import { Contact } from '../models/contact.class';
import ContactComponent from './contact';
import ContactForm from './contactForm';

const ContactList = () => {
  const contact1 = new Contact('Anthony', 'Anguiz', 'anthony.anguizvargas@gmail.com', true);
  const contact2 = new Contact('David', 'Guetta', 'david.guetta@gmail.com', false);
  const contact3 = new Contact('Harry', 'Potter', 'harry.potter@outlook.com', true);

  // Estado del componente
  const [contacts, setContacts] = useState([contact1, contact2, contact3]);

  function connectContact(contact) {
    console.log('Connected this Contact: ', contact);
    const index = contacts.indexOf(contact);
    const tempContacts = [...contacts];
    tempContacts[index].isConnected = !tempContacts[index].isConnected;
    // We update the state of the component and it will update the
    // Iteration of the tasks in order to show the task updated
    setContacts(tempContacts);
  }

  function deleteContact(contact) {
    console.log('Deleted this Contact: ', contact);
    const index = contacts.indexOf(contact);
    const tempContacts = [...contacts];
    tempContacts.splice(index, 1);
    setContacts(tempContacts);
  }

  function addContact(contact) {
    console.log('Added this Component: ', contact);
    const tempContacts = [...contacts];
    tempContacts.push(contact);
    setContacts(tempContacts);
  }

  return (
    <div>
      <div className="col-12">
        <div className="card">
          {/* Card Header (title) */}
          <div className="card text-bg-dark mb-3">
            <h5>Your contacts:</h5>
          </div>
          {/* Card Body (content) */}
          <div
            className="card-body"
            data-mdb-perfect-scrollbar="true"
            style={{ position: 'relative', height: '400px' }}
          >
            <table className="table table-striped ">
              <thead className="table-dark">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">¿is Connected?</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact, index) => {
                  return (
                    <ContactComponent
                      key={index}
                      contact={contact}
                      connect={connectContact}
                      remove={deleteContact}
                    ></ContactComponent>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <ContactForm add={addContact}></ContactForm>
      </div>
    </div>
  );
};

export default ContactList;
