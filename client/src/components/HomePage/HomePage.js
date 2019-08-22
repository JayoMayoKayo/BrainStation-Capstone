import React from 'react';

//Material-Ui Components

//Components
import Navbar from '../Navbar/Navbar.js';

class HomePage extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <h1>Homepage</h1>
      </>
    );
  }
}
export default HomePage;