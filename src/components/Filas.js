import React, { useState, Fragment } from 'react';
import {Vehiculos} from './Vehiculos';

//MATERIAL
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Collapse from '@material-ui/core/Collapse';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

export const Filas = props => {
    const { item } = props;
    const [open, setOpen] = useState(false);
    const classes = useRowStyles();

    return (
        <Fragment >
            <TableRow className={classes.root}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {item.vehicles.length ? (open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />) : <p></p>}
                    </IconButton>
                </TableCell>
                <TableCell >{item.name}</TableCell>
                <TableCell>{item.hair_color}</TableCell>
                <TableCell>{item.eye_color}</TableCell>
            </TableRow>

            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography variant="h6" gutterBottom component="div">
                                Vehiculo
                            </Typography>
                            {
                                item.vehicles.map((itemVehiculo, indexVehiculo) =>
                                    <Vehiculos key={indexVehiculo} urlVehiculo={itemVehiculo} />
                                )
                            }
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </Fragment>
    );
}