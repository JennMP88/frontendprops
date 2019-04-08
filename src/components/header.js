import React from 'react'
import {Link} from 'react-router-dom'
import AuthContext from '../contexts/auth';

//--------------Header pics
// const logo = require('../assets/logo.png')
// const following =require('../assets/heart.jpg')
// const userprofile =require('../assets/person.png')
// const search=require('../assets/compass.png')
// const logout=require('../assets/exit.png')


// import React from 'react';
// import { Link } from 'react-router-dom';
// import AuthContext from '../contexts/auth';
// import Userprofile from '../containers/userprofile';
const logo = require('../assets/logo.png')
// const following =require('../assets/heart.jpg')
// const userprofile =require('../assets/person.png')
// const search=require('../assets/compass.png')
// const logout=require('../assets/exit.png')


export default (props) => {
  const loggedOut = 
  <>
   <li className="nav-item">
      <Link className="nav-link" to="/signup">Sign Up</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/login">Login</Link>
    </li>
    
    </>

  const loggedIn = 
  
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav">
        {/* <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li> */}
        <li className="nav-item">
      <Link to='/followlist'>Follow</Link>
       </li>
       <li className="nav-item">
          <Link className="nav-link" to="/searches">Search</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/followers">Followers</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/userprofile">Userprofile</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link" to="/logout">Logout</Link>
        </li>
      </ul>
    </nav>
 </>

  

  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* <Link className="navbar-brand" to="/">Authentication</Link> */}
     
     <img src={logo} width="100" height="100" alt="Fake-stah-gram"/>
     <h4>Fake-stah-gram</h4> 
      <ul className="navbar-nav">
        <li className="nav-item"> 
          <Link className="nav-link" to="/">Home</Link>
        </li>
        
        <AuthContext.Consumer>
          {
            user => {
              if (user) return loggedIn
              else return loggedOut
            }
          }
        </AuthContext.Consumer>
      </ul>
    </nav>
  )
}


//-------------------------------------------

// const Header = () => {
//     return (
//         // <div>
//         //     <Link to='/'>Home</Link>
//         //     <Link to='/newsfeed'>Newsfeed</Link>
//         //     <Link to='/followlist'>Follow</Link>
//         // </div>
//     <>
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <ul className="navbar-nav">
//         <li className="nav-item">
//           <Link className="nav-link" to="/">Home</Link>
//         </li>
//         <li className="nav-item">
//       <Link to='/followlist'>Follow</Link>
//        </li>
//        <li className="nav-item">
//           <Link className="nav-link" to="/searches">Search</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/followers">Followers</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/signup">Sign Up</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/login">Login</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/logout">Logout</Link>
//         </li>
//       </ul>
//     </nav>
//  </>
//     )
// }

// export default Header;