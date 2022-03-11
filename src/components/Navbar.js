import React from "react";
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='header'>
      <Link to='/'>Home</Link>
      <Link to='/About'>About</Link>
      <Link to='/Product'>Product</Link>
    </div>
  );
}

export default Navbar;
