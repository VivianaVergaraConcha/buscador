import React, { useState, useEffect, Fragment } from 'react';

//MATERIAL
import { Grid } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

function Listar() {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    console.log('useEffect');
    obtenerDatos();
  }, []);

  const obtenerDatos = async() => {
    const data = await fetch('https://swapi.dev/api/people/')
    const personajes = await data.json();
    setLista(personajes.results);
  }

  return(
      <Fragment>
        {
            lista.map((item, index)=>
                <Grid item xs={3} key={index}>
                    <Card> 
                        <CardContent >
                            <Typography variant="h5" component="h2">
                                {item.name}
                            </Typography>
                            <Typography color="textSecondary">
                                {item.hair_color}
                                <br/>
                                {item.eye_color}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton color="primary" aria-label="add">
                                <AddIcon/>
                            </IconButton>
                        </CardActions>
                    </Card> 
                </Grid>   
            )
        }
      </Fragment>
  );
}

export default Listar;
