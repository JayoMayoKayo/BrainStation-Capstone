import React from 'react';
import axios from 'axios';

//Components
import Navbar from '../Navbar/Navbar.js';
import DealCardList from './DealCardList/DealCardList.js';

//Material Ui Components
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

//Component Stylings
const styles = {
  searchBar : {
    padding : '16px',
    marginLeft : '16px',
    marginRight : '16px',
    marginTop : '16px'
  },
  materialSearchBar : {
    width : '50%',
    alignContent : 'center',
    justifyContent : 'center' 
  },
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
}

class PriceChecker extends React.Component {
  state = {
    //Search Bar Results
    gameNameResult : [],
    //Deal Results
    gameDealResult : [
      {
        "plain": "",
        "title": "",
        "shop": {
            "id": "",
            "name": ""
        },
        "drm": [],
        "urls": {
            "buy": "",
            "game": ""
        }
      } 
    ]
  }

  componentDidMount() {
    axios.get(`http://localhost:8081/deals/findGame/degreesofseparation`)
      .then((response) => {
        console.log(response);
        this.setState({
          gameDealResult : response.data.list
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  gameNameSearch = (nameInput) => {
    axios.get(`http://localhost:8081/deals/nameSearch/${nameInput}`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          gameNameResult : response.data.data.list
        })
        console.log(this.state.gameNameResult)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  gameDealSearch = (x) => {
    axios.get(`http://localhost:8081/deals/findGame/${x}`)
      .then((response) => {
        console.log(response);
        this.setState({
          gameDealResult : response.data.list
        })
        console.log(this.state.gameDealResult);
        console.log(this.state.gameDealResult[0].title);
      })
      .catch((error) => {
        console.log(error);
      })
  }
  
  render() {
    const{ classes } = this.props;
    let gameNameResult = this.state.gameNameResult;
    return (
      <>
        <Navbar />
        <Paper className={classes.searchBar} >
          <Input className={classes.materialSearchBar}
            placeholder='Enter the game you want to save moolah on...' 
            onChange={(e) => {this.gameNameSearch(e.target.value)}} 
          />
          <List>
            {gameNameResult.map((gameNameResult, index) => (
              <ListItem 
                className={classes.listElement} 
                disableGutters={true} 
                onClick={() => {this.gameDealSearch(gameNameResult.plain)}}
              >
                <p className={classes.listItemP}>{gameNameResult.title}</p>
              </ListItem>
            ))}
          </List>
        </Paper>
        <DealCardList gameDealResult={this.state.gameDealResult}/>
        

      </>
    );
  }
}
export default withStyles(styles)(PriceChecker);