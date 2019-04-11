import React from 'react';
import AuthContext from '../contexts/auth';
import '../styles/search.css';
import peoplelist from "../api"
// const defaultuser = require('../assets/user.png')
// const placeholder = require('../assets/placeholder.jpg')

const Followers = ({username,avatar}) => {
  // console.log({username})
  return(
<AuthContext.Consumer>
                {
                    (user) => {
                        if (user) {
                          return (<>

<div className="container border black">
<div className="row .d-flex">
<img src={peoplelist[1].avatar} alt="..." className="rounded-circle" height="200" width="200" />
<div className="col-sm-8">
<p>  <div className="col name"> {peoplelist[1].username}</div></p>
</div>
</div>
</div>


<div className="container border black">
<div className="row .d-flex">
<img src={peoplelist[2].avatar} alt="..." className="rounded-circle" height="200" width="200" />
<div className="col-sm-8">
<p>  <div className="col name"> {peoplelist[2].username}</div></p>
</div>
</div>
</div>
</>
                            )
                        }
                        else {
                            return <h2>You are not logged in.</h2>
                        }
                    }
                }

            </AuthContext.Consumer>
        )
    }

export default Followers;