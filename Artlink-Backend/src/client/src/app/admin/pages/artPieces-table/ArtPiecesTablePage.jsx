/*
Import extenal libraries
*/
import React, { Component } from 'react';

/*
Material UI
*/
import Grid from '@material-ui/core/Grid';

/*
Components
*/
import ArtPiecesTable from '../../components/artPieces-table';

class ArtpiecesTablePage extends Component {
  render() {
    return (
      <Grid container spacing={24}>
          <Grid item xs={12}>
              <ArtPiecesTable />
          </Grid>
      </Grid>
    )
  }
}

export default (ArtpiecesTablePage);