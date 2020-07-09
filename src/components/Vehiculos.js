import React, { useState, useEffect } from 'react';

export const Vehiculos = props => {
  const [vehiculo, setVehiculo] = useState([]);

  useEffect(() => {
    const obtenerVehiculo = async () => {
      const data = await fetch(`${props.urlVehiculo}`);
      const dataVehiculo = await data.json();
      setVehiculo(dataVehiculo);
      console.log('aqui')
      
    }

    obtenerVehiculo();
  }, [props.urlVehiculo]);

  return (
    <p>{vehiculo.name}</p>
  );
};
