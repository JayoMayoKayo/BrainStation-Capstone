import React from 'react';

//Material Ui Components
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'

//Components


//Component Stylings
const styles = {
  storeDealList : {

  }
};

class DealListItem extends React.Component {
  render() {
    const{ classes, value } = this.props;

    return (
      <>  
        <ListItem disableGutters={true}>  
          <Grid container spacing={1}>
            
              <Grid item xs ={6} sm={6} md={4} lg={2}>
                <p>{this.props.gameDealResult.shop.name}</p>
              </Grid>
              <Grid item xs ={6} sm={6} md={2} lg={2}>
                <p>{this.props.gameDealResult.price_cut}% Off</p>
              </Grid>
              <Grid item xs ={6} sm={6} md={3} lg={3}>
                <p>Current Price: ${this.props.gameDealResult.price_new}</p>
              </Grid>
              <Grid item xs ={6} sm={6} md={3} lg={3}>
                <p>Original Price: ${this.props.gameDealResult.price_old}</p>  
              </Grid>
              <Grid item xs ={12} lg={2}>
                <Button color="primary">Check Price History</Button>  
              </Grid>
            
          </Grid>
        </ListItem>
        <Divider />
      </>
    );
  }
}
export default withStyles(styles)(DealListItem);