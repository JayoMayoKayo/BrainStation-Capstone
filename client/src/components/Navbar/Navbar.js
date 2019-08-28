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
    backgroundColor: '#596273',
  },
  navbarLink: {
    '&:hover': {
      backgroundColor: '#7A8292'
    }
  }
};

class Navbar extends React.Component {
  render() {
    const{ classes, value } = this.props;

    return (
        <div className="navbar">
          <AppBar className={classes.navbarMenu} position="static">
            <Tabs value="false">
              <Tab className={classes.navbarLink} label="Home" component={Link} to="/" index={0}></Tab>
              <Tab className={classes.navbarLink} label="Newsfeed" component={Link} to="/newsfeed" index={1}></Tab>
              <Tab className={classes.navbarLink} label="Price Checker" component={Link} to="/pricechecker" index={2}></Tab>
              <Tab className={classes.navbarLink} label="About" component={Link} to="/about" index={3}></Tab>
            </Tabs>
          </AppBar>
        </div>
    );
  }
}
export default withStyles(styles)(Navbar);