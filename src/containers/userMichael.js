import React, { Component } from 'react';
import AuthContext from '../contexts/auth';
import '../styles/userprofile.css';
import {Link} from 'react-router-dom'
import peoplelist from "../api"
import userpost from "../apipost"




class UserMichael extends Component {
    constructor(props) {
        super(props)

        

        this.state = {
            following: 0,
            
        }
    }

   

    showPostsPosted=(e)=>{
        const {pictureposted}=this.props
        return (
          userpost.map=(e) => (
            {pictureposted}
          ))
      }
    
    render() {
        console.log(this.state)
        const { following } = this.state
        // username, avatar, post, pictureposted, from props dont need
        const { timestamp } = this.props
        console.log('props', this.props.pictureposted)
        console.log(userpost)
        return (
            <AuthContext.Consumer>
                {
                    (user) => {
                        if (user) {
                            return (<>
                                <div className="container">
                                    <div className="row .d-flex">
                                        <img src={peoplelist[3].avatar} alt="..." className="rounded-circle" height="200" width="200" />
                                        <div className="col-sm-8">
                                            <h3> {peoplelist[3].username} </h3>
                                            <Link to = {'/followers'}>  <p> Followers: 0 </p></Link>
                                            <p> Following: 1</p>
                                            <p> <button className="btn btn-dark">Follow</button>  </p>
                                        </div>
                                    </div>
                                </div>

                                    {/* Do a link to Viewpost */}
                                <div className="card-wrapper">
                        
                                                   
                                                        <div className="card-body-test">
                                                            <img className="single-img" src={peoplelist[3].avatar} />
                                                                {/* Uploaded{moment(timestamp).fromNow()} */}
                                                              <p> Caption : finally signed up </p>
                                                        </div>

                                                    
                                            
                                </div>
                            </>)
                        }

                        else {
                            return <h2>You are not logged in.</h2>
                        }
                    }
                  
                }

            </AuthContext.Consumer>
        )
    }
}
export default UserMichael;