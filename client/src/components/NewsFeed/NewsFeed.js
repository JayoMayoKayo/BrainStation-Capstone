import React from 'react';
import axios from 'axios';

//Material-ui components
import { withStyles } from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

//Components
import Navbar from '../Navbar/Navbar.js';
import MaterialCard from '../MaterialCard/MaterialCard.js';
import MaterialCardList from '../MaterialCardList/MaterialCardList.js';

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
  
  getGameNews = () => {
    console.log("hey my function works dope");
    axios.get('http://localhost:8081/deals/stores')
    .then((response) => {
      console.log(response.data);
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
          <Button onClick={() => {this.getGameNews()}}>Dead By Daylight</Button>
          <Button onClick={() => {console.log("button 2 clicked")}}>Hollow Knight</Button>
          <Button onClick={() => {console.log("button 3 clicked")}}>Sekiro</Button>
          <Button onClick={() => {console.log("button 3 clicked")}}>PUBG</Button>
        </ButtonGroup>
        <MaterialCardList newsData={this.state.newsData}/>
      </>
    );
  }
}
export default withStyles(styles)(NewsFeed);