import React from 'react';

//Material-ui components
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

//Components
import Navbar from '../Navbar/Navbar.js';
import MaterialCard from '../MaterialCard/MaterialCard.js';
import MaterialCardList from '../MaterialCardList/MaterialCardList.js';
class NewsFeed extends React.Component {
  state = { 
    newsData: [],
    gameButton : 0
  }
  getGameNews = () => {
    console.log("hey my function works dope");
  }

  render() {
    return (
      <>
        <Navbar />
        <h1>NewsFeed</h1>
        <ButtonGroup variant="contained" color="primary" md={12}>
          <Button>Default GTA V ID: 271590 </Button>
          <Button onClick={() => {this.getGameNews()}}>Dead By Daylight</Button>
          <Button onClick={() => {console.log("button 2 clicked")}}>Hollow Knight</Button>
          <Button onClick={() => {console.log("button 3 clicked")}}>Sekiro</Button>
          <Button onClick={() => {console.log("button 3 clicked")}}>PUBG</Button>
        </ButtonGroup>
        <MaterialCardList />
      </>
    );
  }
}
export default NewsFeed;