import React, { Component } from 'react';
import AuthContext from '../contexts/auth';
import '../styles/userprofile.css';
import peoplelist from "../api"
import userpost from "../apipost"
import moment from 'moment';
import Image from '../services/images';
import ImageService from '../services/images';
// const defaultuser = require('../assets/user.png')
// const placeholder = require('../assets/placeholder.jpg')



class Userprofile extends Component {
    constructor(props) {
        super(props)

        ImageService.init();
        const imagesArray = ImageService.getImages();

        this.state = {
            following: 0,
            images:imagesArray
        }
    }

    // followingPeople = (e) => {
    //     let { following } = this.state
    //     following = following + 1
    //     this.setState({ following })
    // }

    showPostsPosted=(e)=>{
        const {pictureposted}=this.props
        return (
          userpost.map=(e) => (
            {pictureposted}
          ))
      }
    
    render() {
        console.log(this.state)
        const { following,images } = this.state
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
                                        <img src={peoplelist[0].avatar} alt="..." className="rounded-circle" height="200" width="200" />
                                        <div className="col-sm-8">
                                            <h3> {peoplelist[0].username} </h3>
                                            <p> Followers: 2 </p>
                                            <p> Following: 2</p>
                                            <p> <button className="btn btn-dark">Follow</button>  </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-wrapper">
                                            {
                                                images.map((e, i) => {
                                                    return (
                                                        <div className="card-body-test" key={i}>
                                                        
                                                            <img className="single-img" src={e.url} />
                                                                Uploaded{moment(timestamp).fromNow()}

                                                                {/* return <Image image={e.url} timestamp={e.timestamp} key={i} /> */}
                                                        </div>
                                                    )
                                                })
                                            }
                                        {/* </div>
                                    </div> */}


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






