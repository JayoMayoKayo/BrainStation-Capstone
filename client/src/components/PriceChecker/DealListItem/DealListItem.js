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
    '&:hover' : {
      background: '#D3D8E1'
    }
  }
};

class DealListItem extends React.Component {
  historyLink = (event) => {
    event.stopPropagation();
    window.open(this.props.gameInfo.urls.history, '_blank');
  }
  render() {
    const{ classes, value } = this.props;
    let gameInfo = this.props.gameInfo;
    return (
      <>  
        <ListItem 
          className={classes.storeDealList} 
          disableGutters={true}
          onClick={() => {window.open(`${this.props.gameDealResult.url}`, '_blank')}}
          >  
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
                <Button 
                  color="primary"
                  onClick={(event) => {this.historyLink(event)}}
                >Check Price History</Button>  
              </Grid>
            
          </Grid>
        </ListItem>
        <Divider />
      </>
    );
  }
}
export default withStyles(styles)(DealListItem);