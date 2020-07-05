import React, { useState } from 'react';
import axios from 'axios'

//MATERIAL
import { TextField, Container, Grid} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

function App() {
  const [nombre, setNombre] = useState('');

  function handleChange(event){
    setNombre(event.target.value);
  }
  
  function handleClick(nombre){
    axios.get(`https://swapi.dev/api/people/?search=${nombre}`)
        .then(response => {
          console.log(response.data);
          setNombre('');
        })
        .catch(
          error => alert(error)
        )
  }

  return(
    <Container fixed>
     <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField label="Buscar" onChange={handleChange} value={nombre}/>
        <IconButton type="submit" aria-label="search" color="primary" onClick={() => handleClick(nombre)}>
          <SearchIcon />
        </IconButton>
      </Grid>
      <Grid item xs={3}>
          <Card> 
            <CardContent>
              <Typography variant="h5" component="h2">
                nombre
              </Typography>
              <Typography color="textSecondary">
                <span>•</span>pelo
                <br/>
                <span>•</span>ojos
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton color="primary" aria-label="add">
                <AddIcon/>
              </IconButton>
            </CardActions>
          </Card>  
        </Grid>
     </Grid>
    </Container>
  );
}

export default App;
