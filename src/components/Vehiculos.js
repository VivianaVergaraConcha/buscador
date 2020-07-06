import React, { useState, useEffect, Fragment } from 'react';

function Vehiculos(props) {
  const [vehiculo, setVehiculo] = useState([]);

  useEffect(() => {
    obtenerVehiculo(props.vehiculo);
  }, []);

  const obtenerVehiculo = async(url) => {
    const data = await fetch(`${url}`);
    const vehiculo = await data.json();
    setVehiculo(vehiculo);
  }

  return(
      <Fragment>
        <p>{vehiculo.name}</p>
      </Fragment>
  );
}

export default Vehiculos;
