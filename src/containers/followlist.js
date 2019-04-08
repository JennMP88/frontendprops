import React from 'react';
// import AuthContext from '../contexts/auth';
import '../styles/search.css';
// const defaultuser = require('../assets/user.png')
// const placeholder = require('../assets/placeholder.jpg')

const FollowList = ({username,avatar}) => {
  // console.log({username})
  return(


<>
<div className="container border black">
<div className="row .d-flex">

<img src={avatar} alt="..." className="rounded-circle" height="200" width="200" />
<div className="col-sm-8">
<p>  <div className="col name"> {username}</div></p>
</div>
</div>
</div>
</>
  )
  }


export default FollowList;
