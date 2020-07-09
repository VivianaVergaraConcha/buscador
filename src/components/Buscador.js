import React from 'react';

//MATERIAL
import { TextField } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

export const Buscador = props => (
    <form onSubmit={props.handleClick}>
        <TextField label="Buscar" onChange={props.handleChange} value={props.nombre} />
        <IconButton type="submit" aria-label="search" color="primary">
            <SearchIcon />
        </IconButton>
    </form>
);