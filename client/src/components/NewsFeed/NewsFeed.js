import React from 'react';
import axios from 'axios';

//Material-ui components
import { withStyles } from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';

//Components
import Navbar from '../Navbar/Navbar.js';
import MaterialCard from './MaterialCard/MaterialCard.js';
import MaterialCardList from './MaterialCardList/MaterialCardList.js';

//Lodash Components
import { debounce } from 'lodash.debounce';

//DownShift Components
import DownShift from "downshift";
import SearchResults from './SearchResults/SearchResults.js';

//Component Stylings
const styles = {
  PaperSearchBar : {
    marginTop : '16px',
    marginRight : '16px',
    marginLeft : '16px'
  },
  materialCardList: {
    margin: "0px"
  }
}

class NewsFeed extends React.Component {
  state = { 
    newsData: [],
    gameList: [],
    gameNameResult : [],
    showSearchResults : false,
    gameInfoImage : 'https://steamcdn-a.akamaihd.net/steam/apps/381210/header.jpg',
    currentSteamId : 'asdf',
    basicId : '271590' 
  }
  componentDidMount() {
    axios.get('http://localhost:8081/games/271590')
    .then((response) => {
      console.log(response);
      this.setState({
        newsData : response.data,
        basicId : '271590'
      })
      console.log(this.state.newsData);
    })
    .catch((error) => {
      console.log(error)
    })
  }
  
  getGameNews = (gameId) => {
    console.log("hey my function works dope");
    axios.get(`http://localhost:8081/games/${gameId}`)
    .then((response) => {
      this.setState({
        newsData : response.data,
        basicId : gameId
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }
  
  getSteamId = (imageString) => {
    const startTerm = 'apps/';
    const endTerm = '/header.jpg';

    const startNum = imageString.indexOf(startTerm);
    const endNum = imageString.indexOf(endTerm);

    const steamId = imageString.substring((startNum + 5), endNum);

    this.setState({
      currentSteamId : steamId
    })
  }

  gameNameSearch = (input) => {
    axios.get(`http://localhost:8081/deals/nameSearch/${input}`)
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
  }

  getIdViaImage = (input) => {
    axios.get(`http://localhost:8081/deals/getInfo/${input}`)
    .then((response) => {
      console.log(response.data.image);
      this.setState({
        gameInfoImage : response.data.image
      })
    })
    .catch((error) => {
      console.log(error);
    });
    
  }

  render() {
    const{ classes, value } = this.props;
    return (
      <>
        <Navbar />
          <ButtonGroup variant="contained" color="primary" className={classes.PaperSearchBar}>
            <Button>Default GTA V ID: 271590 </Button>
            <Button onClick={() => {this.getGameNews(381210)}}>Dead By Daylight</Button>
            <Button onClick={() => {this.getGameNews(367520)}}>Hollow Knight</Button>
            <Button onClick={() => {this.getGameNews(814380)}}>Sekiro</Button>
            <Button onClick={() => {this.getGameNews(578080)}}>PUBG</Button>
          </ButtonGroup>
        <MaterialCardList newsData={this.state.newsData} basicId={this.state.basicId}/>
      </>
    );
  }
}
export default withStyles(styles)(NewsFeed);