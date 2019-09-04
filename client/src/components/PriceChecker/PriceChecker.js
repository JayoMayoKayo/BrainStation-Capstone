import React from 'react';
import axios from 'axios';

//Components
import Navbar from '../Navbar/Navbar.js';
import DealList from './DealList/DealList.js';
import SearchResults from './SearchResults/SearchResults.js';

//Material Ui Components
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

//LoDash Debounce
import { debounce } from 'lodash';

//Component Stylings
const styles = {
  searchBar : {
    padding : '16px',
    marginLeft : '16px',
    marginRight : '16px',
    marginTop : '16px'
  },
  materialSearchBar : {
    width : '100%', 
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
    ],
    //Hides Search Results
    showSearchResults : false
  }

  componentDidMount() {
    axios.get(`http://localhost:8081/deals/findGame/degreesofseparation`)
      .then((response) => {
        this.setState({
          gameDealResult : response.data.list
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  gameNameSearch = debounce((nameInput) => {
    axios.get(`http://localhost:8081/deals/nameSearch/${nameInput}`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          gameNameResult : response.data.data.list,
          showSearchResults : true
        })
      })
      .catch((error) => {
        console.log(error);
      })
  }, 1000)

  gameDealSearch = (x) => {
    axios.get(`http://localhost:8081/deals/findGame/${x}`)
      .then((response) => {
        this.setState({
          gameDealResult : response.data.list,
          showSearchResults : false
        })
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
          {this.state.showSearchResults ? 
            <SearchResults 
            gameNameResult={this.state.gameNameResult}
            gameDealSearch={this.gameDealSearch}
            /> 
            : null
          }
        </Paper>
        <DealList gameDealResult={this.state.gameDealResult}/>
      </>
    );
  }
}
export default withStyles(styles)(PriceChecker);