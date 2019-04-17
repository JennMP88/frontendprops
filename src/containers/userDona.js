import React, { Component } from 'react';
import AuthContext from '../contexts/auth';
import '../styles/userprofile.css';
import peoplelist from "../api"
import userpost from "../apipost"
const defaultuser = require('../assets/user.png')
const placeholder = require('../assets/placeholder.jpg')




class UserDona extends Component {
    constructor(props) {
        super(props)

        this.state = {
            following: 0
        }
    }

    followingPeople = (e) => {
        let { following } = this.state
        following = following + 1
        this.setState({ following })
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
        const { username, avatar, post, pictureposted } = this.props
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
                                        <img src={peoplelist[1].avatar} alt="..." className="rounded-circle" height="200" width="200" />
                                        <div className="col-sm-8">
                                            <h3> {peoplelist[1].username} </h3>
                                            <p> Followers: 0 </p>
                                            <p> Following: {following}</p>
                                            <p> <button onClick={this.followingPeople} className="btn btn-dark">Follow</button>  </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-wrapper">
                                    {/* <div className="col-sm-4-test">
                                        <div className="card-test">
                                            { */}
                                            {
                                                userpost.map((e, i) => {
                                                    return (
                                                        <div className="card-body-test" key={i}>
                                                            <img className="single-img" src={e.pictureposted} />
                                                            
                                                        </div>
                                                    )
                                                })
                                            }

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
export default UserDona;