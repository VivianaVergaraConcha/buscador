import React, { useState, useEffect, Fragment } from 'react';
import Vehiculos from './Vehiculos';

//MATERIAL
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Grid, Button, TextField } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

function Personajes() {
    const [lista, setLista] = useState([]);
    const [nombre, setNombre] = useState('');

    useEffect(() => {
        obtenerDatos();
    },[]);

    const obtenerDatos = async() => {
        const data = await fetch(`https://swapi.dev/api/people/?search=${nombre}`)
        const personajes = await data.json();
        setLista(personajes.results);
    }
    
    function handleChange(event){
        setNombre(event.target.value);
    }
      
    function handleClick(event){
        obtenerDatos();
        event.preventDefault();
    }

    function handleClickTabla(parametro){
        alert("CLICK"+parametro);
    }

    return(
        <Fragment>
            <Grid item xs={8}>
                <form onSubmit={handleClick}>
                    <TextField label="Buscar" onChange={handleChange} value={nombre}/>
                    <IconButton type="submit" aria-label="search" color="primary">
                        <SearchIcon />
                    </IconButton>
                </form>
            </Grid>
            <Grid item xs={8}>
                <TableContainer component={Paper}>
                    <Table  size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Nombre</TableCell>
                                <TableCell>Color de pelo</TableCell>
                                <TableCell>Color de ojos</TableCell>
                                <TableCell>Vehiculo</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                lista.map((item, index)=>
                                    <TableRow key={index} onClick={() => handleClickTabla(index)}>
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell>{item.hair_color}</TableCell>
                                        <TableCell>{item.eye_color}</TableCell>
                                        <TableCell align="center">
                                            {
                                                // item.vehicles.map((itemVehiculo, indexVehiculo)=>
                                                //     <Vehiculos key={indexVehiculo} vehiculo = {itemVehiculo}/>
                                                    
                                                // )
                                            }
                                            <Button variant="contained" color="primary" >
                                                Ver
                                            </Button>
                                        </TableCell>
                                    </TableRow>       
                                )
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            <Grid item xs={8} align="center"> 
                <Button variant="contained">Anterior</Button>
                <Button variant="contained">Siguiente</Button>
            </Grid>
        </Fragment>
    );
}

export default Personajes;
