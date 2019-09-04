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
    paddingBottom : '16px',
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
        <Grid spacing={1}
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} md={8} lg={6}>
            <Paper className={classes.AboutMe}>
              <h1>Who am I? (It's Joseph Kim!)</h1>

              <p>My love for technology is matched with my passion for learning. With a technical background in mechanical and manufacturing, I use my problem-solving abilities to create unique solutions to everyday problems.</p>
            </Paper>
          </Grid>
        </Grid>
      </>
    );
  }
}
export default withStyles(styles)(About);