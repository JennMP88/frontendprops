import React from 'react';
// import AuthContext from '../contexts/auth';
import '../styles/search.css';
// const defaultuser = require('../assets/user.png')
// const placeholder = require('../assets/placeholder.jpg')

const FollowList = ({user,avatar}) => {
  // console.log({user})
  return(
<>
<p><b> {user}  </b> </p>
<img src={avatar} alt="..." className="rounded-circle" height="100" width="100" />
  </> 
  )
  }


export default FollowList;
