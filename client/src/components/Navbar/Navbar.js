import React from 'react';
import { Link } from 'react-router-dom';

//Material Ui Components
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

//Components


//Component Stylings
const styles = {
  navbarMenu: {
    backgroundColor: 'green'
  }
};

class Navbar extends React.Component {
  render() {
    const{ classes } = this.props;
    return (
        <div className="navbar">
          <AppBar className={classes.navbarMenu} position="static">
            <Tabs>
              <Link to="/"><Tab label="Home" /></Link>
              <Link to="/newsFeed"><Tab label="Newsfeed" /></Link>
              <Link to="/pricechecker"><Tab label="Price Checker" /></Link>
              <Link to="/about"><Tab label="About" /></Link>
            </Tabs>
          </AppBar>
        </div>
    );
  }
}
export default withStyles(styles)(Navbar);