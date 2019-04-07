import React from 'react'
import {Link} from 'react-router-dom'
//--------------Header pics
const logo = require('../assets/logo.png')
const following =require('../assets/heart.jpg')
const userprofile =require('../assets/person.png')
const search=require('../assets/compass.png')
const logout=require('../assets/exit.png')


const Header = () => {
    return (
        // <div>
        //     <Link to='/'>Home</Link>
        //     <Link to='/newsfeed'>Newsfeed</Link>
        //     <Link to='/followlist'>Follow</Link>
        // </div>
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
      <Link to='/followlist'>Follow</Link>
       </li>
        <li className="nav-item">
          <Link className="nav-link" to="/signup">Sign Up</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/logout">Logout</Link>
        </li>
      </ul>
    </nav>
 </>
    )
}

export default Header;