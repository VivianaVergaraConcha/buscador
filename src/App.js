import React, { Fragment, useState, useEffect } from 'react';
import { Buscador } from './components/Buscador';
import { Personajes } from './components/Personajes';

//MATERIAL
import { Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  buttons: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function App() {
  const [lista, setLista] = useState([]);
  const [nombre, setNombre] = useState('');
  const [url, setUrl] = useState('https://swapi.dev/api/people/');
  const [urlSiguiente, setUrlSiguiente] = useState();
  const [urlAnterior, setUrlAnterior] = useState();

  const [habilidatoSiguiente, setHabilidatoSiguiente] = useState(true);
  const [habilidatoAnterior, setHabilidatoAnterior] = useState(true);

  const classes = useStyles();

  useEffect(() => {
    const obtenerDatos = async () => {
      const data = await fetch(url);
      const personajes = await data.json();
      setUrlAnterior(personajes.previous);
      setUrlSiguiente(personajes.next);
      setLista(personajes.results);

      personajes.previous === null ? setHabilidatoAnterior(true): setHabilidatoAnterior(false);
      personajes.next === null ? setHabilidatoSiguiente(true): setHabilidatoSiguiente(false);

      console.log("lista");
    }

    obtenerDatos();
  }, [url]);

  function handleChange(event) {
    setNombre(event.target.value);
  }

  function handleClick(event) {
    setUrl(`https://swapi.dev/api/people/?search=${nombre}`);
    event.preventDefault();
  }

  function siguientePagina() {
    if (urlSiguiente != null) {
      setUrl(urlSiguiente);
    }

  }

  function anteriorPagina() {
    if (urlAnterior != null) {
      setUrl(urlAnterior);
    }
  }

  return (
    <Fragment>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Buscador
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
      <Grid container justify="center" alignItems="center" spacing={3}>
        <Grid item xs={8}>
          <Buscador handleChange={handleChange} handleClick={handleClick} nombre={nombre} />
        </Grid>
        <Grid item xs={8}>
          <Personajes lista={lista} />
        </Grid>
        <Grid item xs={8} align="center" className={classes.buttons}>
          <Button variant="contained" color="primary" onClick={anteriorPagina} disabled={habilidatoAnterior}>Anterior</Button>
          <Button variant="contained" color="primary" onClick={siguientePagina} disabled={habilidatoSiguiente}>Siguiente</Button>
        </Grid>
      </Grid>
    </Fragment>
  );

}

export default App;
