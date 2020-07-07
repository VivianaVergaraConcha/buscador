import React, { Fragment } from 'react';
import Personajes from './components/Personajes';

//MATERIAL
import { Grid } from '@material-ui/core';

function App() {

  return(
    <Fragment>
      <Grid container justify="center" alignItems="center" >
        <Grid item xs={8}>
          <h1>Buscador</h1>
        </Grid>
        <Personajes/>
      </Grid>
    </Fragment>
  );

}

export default App;
