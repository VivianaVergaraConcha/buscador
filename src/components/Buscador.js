import React, { useState } from 'react';
import axios from 'axios';

//MATERIAL
import { TextField, Grid} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

function Buscador(){
    const [nombre, setNombre] = useState('');

    function handleChange(event){
        setNombre(event.target.value);
    }
      
    function handleClick(nombre){
        axios.get(`https://swapi.dev/api/people/?search=${nombre}`)
            .then(response => {
              setNombre('');
            })
            .catch(
            error => alert(error)
        )
    }
    
    return(
        <Grid item xs={8}>
            <TextField label="Buscar" onChange={handleChange} value={nombre}/>
            <IconButton type="submit" aria-label="search" color="primary" onClick={() => handleClick(nombre)}>
                <SearchIcon />
            </IconButton>
        </Grid>
    );

}

export default Buscador;

