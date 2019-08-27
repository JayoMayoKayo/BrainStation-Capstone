import React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


class Navbar extends React.Component {
  render() {
    return (
      <>
        <div className="navbar">
          <AppBar position="static" color="#ffffff">
            <Tabs>
              <Tab label="Home"></Tab>
              <Link to="/newsFeed"><Tab label="Newsfeed" /></Link>
              <Tab label="Item Two"></Tab>
              <Tab label="Item Three"></Tab>
            </Tabs>
          </AppBar>
        </div>
      </>
    );
  }
}
export default Navbar;