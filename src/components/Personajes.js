import React from 'react';
import {Filas} from './Filas';

//MATERIAL
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export const Personajes =  props  => (
    <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
            <TableHead>
                <TableRow>
                    <TableCell />
                    <TableCell>Nombre</TableCell>
                    <TableCell>Color de pelo</TableCell>
                    <TableCell>Color de ojos</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    props.lista.map((item, index) =>
                        <Filas key={index} item={item} />
                    )
                }
            </TableBody>
        </Table>
    </TableContainer>
);

