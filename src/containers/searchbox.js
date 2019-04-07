import React from 'react';
// import AuthContext from '../contexts/auth';
import '../styles/search.css';
// const defaultuser = require('../assets/user.png')
// const placeholder = require('../assets/placeholder.jpg')

const Searchbox = ({user,avatar}) => {
  // console.log({user})
  return(



<>
<form>
          <input className="box" type="search" id="search" placeholder="Search" />

           <input className='searchButton' type='submit' value='Search' />
 </form>
 </>)
}

 export default Searchbox;