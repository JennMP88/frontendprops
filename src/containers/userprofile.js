import React, { Component } from 'react';
import AuthContext from '../contexts/auth';
import '../styles/userprofile.css';
import peoplelist from "../api"
const defaultuser = require('../assets/user.png')
const placeholder = require('../assets/placeholder.jpg')




class Userprofile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            following: 0
        }
    }

    followingPeople=(e)=>{
        let {following}=this.state
        following=following+1
        this.setState({following})
    } 
    render() {
        console.log(this.state)
        const { following } = this.state
        const { username, avatar,post,pictureposted } = this.props
        return (
            <AuthContext.Consumer>
                {
                    (user) => {
                        if (user) {
                            return (<>
                                <div className="container">
                                    <div className="row .d-flex">
                                        <img src={peoplelist[0].avatar} alt="..." className="rounded-circle" height="200" width="200" />
                                        <div className="col-sm-8">
                                            <h3> {peoplelist[0].username} </h3>
                                            <p> Followers: 2 </p>
                                            <p> Following: {following}</p>
                                            <p> <button onClick={this.followingPeople} className="btn btn-dark">Follow</button>  </p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="row">



                                    <div className="col-sm-4">
                                        <div className="card">
                                            <div className="card-body">

                                            {/* map here */}
                                                <img src={pictureposted} alt="..." />
                                            </div>
                                        </div>
                                    </div>
                               

                                {/* {post.map(eachpic=>(
                                    <div className="col-sm-4">
                                        <div className="card">
                                            <div className="card-body">
                                                <img src={eachpic.postpic} alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                 ))} */}


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
export default Userprofile;






