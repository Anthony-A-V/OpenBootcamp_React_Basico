import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../models/contact.class';

const ContactConected = (props) => {
  const [estado, setEstado] = useState(props.contact.isConnected);

  const changeState = () => {
    setEstado(!estado);
  };

  return (
    <div>
      <h1>Contacto {estado ? 'En línea' : 'No disponible'}</h1>
      <button onClick={changeState}>Cambiar estado</button>
    </div>
  );
};

ContactConected.propTypes = {
  contact: PropTypes.instanceOf(Contact),
};

export default ContactConected;
