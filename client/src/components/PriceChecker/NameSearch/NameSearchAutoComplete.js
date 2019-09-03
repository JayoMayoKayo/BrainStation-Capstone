import React from 'react';
import axios from 'axios';

//Material Ui Components
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';

//DownShift Components 
import DownShift from 'downshift';

//react-autosuggest
import Autosuggest from 'react-autosuggest';

//Component Stylings
const styles = {
  searchBar : {
    padding : '16px',
    marginLeft : '16px',
    marginRight : '16px'
  },
  materialSearchBar : {
    width : '50%',
    alignContent : 'center',
    justifyContent : 'center' 
  }
}

const gameNames = [
  { value: 'Apple1' },
  { value: 'Apple2' },
  { value: 'Apple3' },
  { value: 'Apple4' },
  { value: 'Apple5' }
];

class NameSearch extends React.Component {
  state = {
    gameSearchResult : {
      data : {
        plain : ''
      }
    }
  }

  gameNameSearch = (nameInput) => {
    console.log()
    axios.get(`http://localhost:8081/deals/nameSearch/${nameInput}`)
      .then((response) => {
        console.log(response);
        this.setState({
          gameSearchResult : response.data
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    const{ classes } = this.props;
    return (
        <Paper className={classes.searchBar} >
          <Input className={classes.materialSearchBar}
            placeholder='Enter the game you want to save moolah on...' 
            onChange={(e) => {this.gameNameSearch(e.target.value)}} />
          <p>hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello </p>
          <p>{this.state.gameSearchResult.data.plain}</p>
        </Paper>
    );
  }
}
export default withStyles(styles)(NameSearch);