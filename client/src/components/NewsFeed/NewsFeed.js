import React from 'react';
import axios from 'axios';

//Material-ui components
import { withStyles } from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

//Components
import Navbar from '../Navbar/Navbar.js';
import MaterialCard from './MaterialCard/MaterialCard.js';
import MaterialCardList from './MaterialCardList/MaterialCardList.js';

//Component Stylings
const styles = {
  materialCardList: {
    margin: "0px"
  }
}

class NewsFeed extends React.Component {
  state = { 
    newsData: []
  }

  componentDidMount() {
    axios.get('http://localhost:8081/games/271590')
      .then((response) => {
        console.log(response);
        this.setState({
          newsData : response.data
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
        newsData : response.data
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  render() {
    const{ classes, value } = this.props;
    return (
      <>
        <Navbar />
        <h1>NewsFeed</h1>
        <ButtonGroup variant="contained" color="primary">
          <Button>Default GTA V ID: 271590 </Button>
          <Button onClick={() => {this.getGameNews(381210)}}>Dead By Daylight</Button>
          <Button onClick={() => {this.getGameNews(367520)}}>Hollow Knight</Button>
          <Button onClick={() => {this.getGameNews(814380)}}>Sekiro</Button>
          <Button onClick={() => {this.getGameNews(578080)}}>PUBG</Button>
        </ButtonGroup>
        <MaterialCardList newsData={this.state.newsData}/>
      </>
    );
  }
}
export default withStyles(styles)(NewsFeed);