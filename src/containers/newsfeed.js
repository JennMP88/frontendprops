import React, { Component } from 'react';
import AuthContext from '../contexts/auth';
import '../styles/home2.css';
import posts from "../apipost"
import users from "../usersapi"
import peoplelist from "../api"
import ImageService from '../services/images';
// import Picturepost, {newImage} from '../containers/createpost' //--here
const hearts = require('../assets/heart.jpg')
const poops = require('../assets/poop.jpg')


class FeedPost extends Component {
  constructor(props) {
    super(props)

    ImageService.init();
    const imagesArray = ImageService.getImages();

    this.state = {
      count: 0,
      poopemoji: 0,
      images: imagesArray
    }
  }

  
  heartUp = (e) => {
    let { count } = this.state;
    count = count + 1;
    this.setState({ count });
  }

  heartDown = (e) => {
    let { count, poopemoji } = this.state;
    count = count - 1;
    poopemoji = poopemoji + 1
    this.setState({ count });
    this.setState({ poopemoji })
  }

  render() {
    console.log(this.state);
    const { username, avatar, post, likes, commentnumber, url, userId, caption } = this.props;
    // const { username,avatar,url,userId, caption} = this.props;
    const { count, poopemoji,images } = this.state
    return (
      <>

        <AuthContext.Consumer>
          {
            (user) => {
              if (user) {
                return (<>
                  <div className="container">
                    <div className='boxed'>
                 
                      <div className="row">

                        <div className="col-8 col-sm-6">
                        {
                              images.map((e, i) => {
                              return (<>
                              <img src={peoplelist[0].avatar} alt="..." className="rounded-circle" height="100" width="100" />
                              <p><b>{peoplelist[0].username} </b> </p>
                              <p> <img src={e.url} alt="..." height="300" width="400" /></p>
                              <p> Caption : {e.caption}  </p>  
                               <button onClick={this.heartUp}><img src={hearts} alt="..." className="rounded-circle" height="30" width="30" />{this.state.count}</button>
                               <button onClick={this.heartDown}><img src={poops} alt="..." className="rounded-circle" height="30" width="30" />{this.state.poopemoji}</button> </>)
                               })
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </>)
              } else {
                return <h2>You are not logged in.</h2>
              }
            }
          }
        </AuthContext.Consumer>
      </>
    )
  }


}

export default FeedPost;

// {posts.map(post => {
//   const {avatar,username}=users[post.userId]

//   return (
//     <div>
//       <div className='topnewsfeed'>
//         <img src={avatar} alt="..." className="rounded-circle" height="100" width="100" />
//         <p><b> {username} </b> Last logged in: An hour ago </p>
//       </div>
//       <img src={post.url} alt="..." height="300" width="400" />
//       <h5>{post.caption}</h5>
//       <button onClick={this.heartUp}><img src={hearts} alt="..." className="rounded-circle" height="30" width="30" />{this.state.count}</button>
//      <button onClick={this.heartDown}><img src={poops} alt="..." className="rounded-circle" height="30" width="30" />{this.state.poopemoji}</button>
//      <h3>View Comments</h3>
//      <p>😀😀😀</p>
//    </div>
//   )
// }
// )}