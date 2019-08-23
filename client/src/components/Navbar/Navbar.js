import React from 'react';

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
              <Tab label="Home" />
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
            </Tabs>
          </AppBar>
        </div>
      </>
    );
  }
}
export default Navbar;