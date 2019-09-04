import React from 'react';

//Components
import Navbar from '../Navbar/Navbar.js';

//Material Ui components
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { ThemeProvider } from '@material-ui/styles';


//Component Stylings
const styles = {
  AboutMe : {
    paddingLeft: '24px',
    paddingTop: '16px',
    marginLeft : '16px',
    marginRight : '16px',
    marginTop : '16px'
    
  }
};

class About extends React.Component {
  render() {
    const{ classes, value } = this.props;
    return (
      <>
        <Navbar />
        <Paper className={classes.AboutMe}>
          <h1>Who am I?</h1>
        </Paper>
      </>
    );
  }
}
export default withStyles(styles)(About);