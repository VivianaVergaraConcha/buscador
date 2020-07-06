import React, { useState, useEffect, Fragment } from 'react';
import Vehiculos from './Vehiculos';
import Buscador from './Buscador';

//MATERIAL
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Grid, Button } from '@material-ui/core';

function Personajes() {
    const url = 'https://swapi.dev/api/people/';
    const [lista, setLista] = useState([]);

    useEffect(() => {
        obtenerDatos();
    }, []);

    const obtenerDatos = async() => {
        const data = await fetch(`${url}`)
        const personajes = await data.json();
        setLista(personajes.results);
    }

    return(
        <Fragment>
            <Buscador/>
            <Grid item xs={8}>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
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
                                <TableRow key={index}>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.hair_color}</TableCell>
                                    <TableCell>{item.eye_color}</TableCell>
                                    <TableCell align="center">
                                        {
                                            item.vehicles.map((itemVehiculo, indexVehiculo)=>
                                                <Vehiculos key={indexVehiculo} vehiculo = {itemVehiculo}/>
                                                
                                            )
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
            <Grid item align="center" item xs={8}> 
                <Button variant="contained">Anterior</Button>
                <Button variant="contained">Siguiente</Button>
            </Grid>
        </Fragment>
    );
}

export default Personajes;
