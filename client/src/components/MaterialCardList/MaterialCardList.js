import React from 'react';

//Material Ui Components
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


//Components
import MaterialCard from '../MaterialCard/MaterialCard.js';


//Component Stylings
const styles = {
  
};

class MaterialCardList extends React.Component {
  render() {
    const{ classes, value } = this.props;

    return (
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <MaterialCard />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MaterialCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <MaterialCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <MaterialCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <MaterialCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <MaterialCard />
        </Grid>
      </Grid>
    );
  }
}
export default withStyles(styles)(MaterialCardList);