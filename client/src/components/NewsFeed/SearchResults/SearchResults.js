import React from 'react';

//Material Ui Components
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { ThemeProvider } from '@material-ui/styles';

//Component Stylings
const styles = {
  listElement : {
    paddingBottom : '2px',
    paddingTop : '2px',
    '&:hover' : {
      background: '#D3D8E1'
    }
  },
  listItemP : {
    marginTop : '0px',
    marginBottom : '0px'
  }
};

class SearchResults extends React.Component {
  render() {
    const{ classes, value } = this.props;
    let gameNameResult = this.props.gameNameResult;
    let getIdViaImage= this.props.getIdViaImage;
    let getGameNews = this.props.getGameNews;
    let getSteamId = this.props.getSteamId;
    return (        
      <>  
        <List>
          {gameNameResult.map((gameNameResult, index) => (
            <ListItem
              className={classes.listElement}   
              disableGutters={true}
              onClick={() => {getGameNews();
                              getIdViaImage();
                            }}
            >
              <p className={classes.listItemP}>{gameNameResult.title}</p> 
            </ListItem>
          ))}
        </List>
      </>
    );
  }
}
export default withStyles(styles)(SearchResults);