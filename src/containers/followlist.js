import React from 'react';
// import AuthContext from '../contexts/auth';
import '../styles/search.css';
// const defaultuser = require('../assets/user.png')
// const placeholder = require('../assets/placeholder.jpg')

const FollowList = ({user,avatar}) => {
  // console.log({user})
  return(


<>
<div className="container border black">
<div className="row .d-flex">

<img src={avatar} alt="..." className="rounded-circle" height="200" width="200" />
<div className="col-sm-8">
<p>  <div className="col name"> {user}</div></p>
</div>
</div>
</div>
</>
  )
  }


export default FollowList;
