/**
 * Ejemplo de componente de tipo clase que dispone de los
 * métodos del ciclo de vida
 */

import React, { Component } from 'react';

class LifeCycleExample extends Component {
  constructor(props) {
    super(props);
    console.log('Constructor: Cuando se instancia el componente');
  }

  componentWillMount() {
    console.log('WillMount: Antes del montaje del componente');
  }

  componentDidMount() {
    console.log('DidMount: Justo al acabar el montaje del componente, antes de pintarlo');
  }

  componentWillReceiveProps(nextProps) {
    console.log('WillReceiveProps: Si va a recibir nuevas props');
  }

  shouldComponentUpdate(nextProps, nextState) {
    /**
     * Sirve para controlar si el componente debe o no actualizarse
     */
    // return true / false
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('WillUpdate: Justo antes de actualizarse');
  }

  componentDidUpdate(nextProps, nextState) {
    console.log('DidUpdate: Justo después de actualizarse');
  }

  componentWillUnmount(prepProps, prevState) {
    console.log('WillUnmount: Justo antes de desaparecer');
  }

  render() {
    return <div></div>;
  }
}

export default LifeCycleExample;
