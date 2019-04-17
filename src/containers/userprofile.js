import React, { Component } from 'react';
import AuthContext from '../contexts/auth';
import '../styles/userprofile.css';
import {Link} from 'react-router-dom'
import peoplelist from "../api"
import userpost from "../apipost"
import moment from 'moment';
import Image from '../services/images';
import ImageService from '../services/images';
import Picturepost from '../containers/createpost'



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
        // const { timestamp } = this.props
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
                                            <Link to = {'/followers'}>  <p> Followers: 1 </p></Link>
                                            <p> Following: 1</p>
                                            <Link to = {'/followlist'}> <p> <button className="btn btn-dark">Follow</button>  </p> </Link> 
                                        </div>
                                    </div>
                                </div>

                                    {/* Do a link to Viewpost */}
                                <div className="card-wrapper">
                                            {
                                                images.map((e, i) => {
                                                    return (
                                                    
                                                        <div className="card-body-test" key={i}>
                                                               <Link to = {'/viewpost'}>
                                                           <img className="single-img" src={e.url} /> </Link>
                                                                {/* Uploaded{moment(timestamp).fromNow()} */}
                                                              <p> Caption : {e.caption}  </p>
                                                              
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
export default Userprofile;






