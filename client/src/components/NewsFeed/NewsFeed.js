import React from 'react';

//Material-ui components
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

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
        <h1>NewsFeed</h1>
        <ButtonGroup variant="contained" color="primary">
          <Button onClick={() => {this.getGameNews()}}>Dead By Daylight</Button>
          <Button onClick={() => {console.log("button 2 clicked")}}>Hollow Knight</Button>
          <Button onClick={() => {console.log("button 3 clicked")}}>Sekiro</Button>
          <Button onClick={() => {console.log("button 3 clicked")}}>PUBG</Button>

        </ButtonGroup>
      </>
    );
  }
}
export default NewsFeed;