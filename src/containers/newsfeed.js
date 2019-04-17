import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import AuthContext from '../contexts/auth';
import '../styles/home2.css';
import posts from "../apipost"
import users from "../usersapi"
import peoplelist from "../api"
import ImageService from '../services/images';
import Input from '../containers/newsfeedinput'
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
      images: imagesArray,
      // input: '',
      // display: []
    }
  }

  componentWillMount() {
    localStorage.getItem('display') && this.setState({
        display: JSON.parse(localStorage.getItem('display')),
        input: ''
    })
}

  // handleInput = (e) => {
  //   this.setState({ input: e.target.value })
  // }

  // clickerClicked = (e) => {
  //   // console.log('clicked',e)
  //   const { input,display } = this.state;
  //   e.preventDefault();
  //   let copy=[...this.state.display]
  //   copy.push(this.state.input)
  //   this.setState({ display: copy })
  // }


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
    // console.log(this.state);
    const { username, avatar, post, likes, commentnumber, url, userId, caption } = this.props;
    // const { username,avatar,url,userId, caption} = this.props;
    const { count, poopemoji, images, input, display } = this.state
    return (
      <>
        <AuthContext.Consumer>
          {
            (user) => {
              if (user) {
                return (<>
                
                
                  <div className="container">
                    {/* <div className='boxed'> */}

                    {/* <div className="row"> */}

                  
                    <div className="col-8 col-sm-6">
                      {
                        images.map((e, i) => {
                            // console.log(e)
                          return (<>
                          <Link to = {'/userprofile'}> 
                            <img src={peoplelist[0].avatar} alt="..." className="rounded-circle" height="100" width="100" />
                            <p><b>{peoplelist[0].username} </b> </p>
                            </Link> 
                        <Link to = {'/viewpost'}>
                            <p> <img src={e.url} alt="..." height="300" width="400" /></p>
                            </Link> 
                            <p> Caption : {e.caption} </p>
                            <p><button onClick={this.heartUp}><img src={hearts} alt="..." className="rounded-circle" height="30" width="30" />{this.state.count}</button> </p>
                            <p><button onClick={this.heartDown}><img src={poops} alt="..." className="rounded-circle" height="30" width="30" />{this.state.poopemoji}</button></p>
                    

                            <Input />

                           
                            {/* Input box for comments */}
                            {/* <p>    <input type='text' value={this.state.input} onChange={this.handleInput} />
                            <button onClick={this.clickerClicked}>Submit</button></p>
                            
                            {/* DISPLAY THE INFO HERE  */}
                            {/* ViewComments*/}
                            {/* <div class="input-group">
                             
                              <p> <div class="form-control">{display[0]}</div> </p>
                            
                            </div> */} 
                            
                          </>
                          )
                        })
                      }


                      
                    </div>
                    {/* </div> */}
                  </div>
                  {/* </div> */}
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