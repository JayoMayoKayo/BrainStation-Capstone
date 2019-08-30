import React from 'react';


//Components
import Navbar from '../Navbar/Navbar.js';
import NameSearch from '../NameSearch/NameSearch.js';

class PriceChecker extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <h1>PriceChecker</h1>
        <NameSearch />
      </>
    );
  }
}
export default PriceChecker;