import React, { useState, useEffect } from "react";

const ClockFunctional = () => {
  const [datos, setDatos] = useState({
    fecha: new Date(),
    edad: 0,
    nombre: "Martín",
    apellidos: "San José",
  });

  const tick = () => {
    setDatos(() => ({
      ...datos,
      fecha: new Date(),
      edad: datos.edad + 1,
    }));
  };

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
    };
  });

  return (
    <div>
      <h2>
        Hora Actual:
        {datos.fecha.toLocaleTimeString()}
      </h2>
      <h3>
        {datos.nombre} {datos.apellidos}
      </h3>
      <h1>Edad: {datos.edad}</h1>
    </div>
  );
};

export default ClockFunctional;
