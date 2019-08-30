import React from 'react';


//Material Ui Components
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

//Component Stylings
const styles = {
  searchBar : {
    padding : '16px',
    marginLeft : '16px',
    marginRight : '16px'
  }
}

class NameSearch extends React.Component {
  render() {
    const{ classes } = this.props;

    return (
        <Paper className={classes.searchBar} >
          <p>hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello </p>
        </Paper>
    );
  }
}
export default withStyles(styles)(NameSearch);