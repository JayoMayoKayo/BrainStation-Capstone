import React from 'react';

//Material Ui Components
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { ThemeProvider } from '@material-ui/styles';

//Components
import DealListItem from '../DealListItem/DealListItem.js';

//Component Stylings
const styles = {
  banner: {
    maxWidth : '100%',
  },
  dealItems : {
    padding : '16px',
    marginLeft : '16px',
    marginRight : '16px',
    marginTop : '16px'
  },
  cardGrid : {
    paddingLeft: '24px',
    paddingTop: '16px',
    width: '100%'
  },
  divider : {
    color : 'blue'
  }
};

class DealCardList extends React.Component {
  render() {
    let gameDealResult = this.props.gameDealResult;
    let gameInfo = this.props.gameInfo;
    const{ classes, value } = this.props;

    return (        
      <>  
        <Paper className={classes.dealItems}>
          <Grid container>
            <Grid item xs={12}
            container
            direction="row"
            justify="center"
            alignItems="center"
            >
              <img className={classes.banner} src={gameInfo.image}/>
            </Grid>
          </Grid>
          <List>
            {gameDealResult.map((gameDealResult, index) => (
                <DealListItem gameDealResult={gameDealResult} index={index}/>
            ))}
          </List>
        </Paper>
      </>
    );
  }
}
export default withStyles(styles)(DealCardList);