import React, {Component} from 'react';
// import React from 'react'
import AuthContext from '../contexts/auth';
import '../styles/home2.css';
const hearts = require('../assets/heart.jpg')
const poops = require('../assets/poop.jpg')
// const placeholder = require('../assets/placeholder.jpg')


class FeedPost extends Component{
  constructor(props){
    super(props)
    this.state={
      count:0,
      poopemoji:0
    }
  }


  heartUp=(e)=>{
    let { count } = this.state; 
    count = count + 1; 
    this.setState({ count });
  }
  
  heartDown=(e)=>{
    let { count,poopemoji } = this.state; 
    count = count - 1; 
    poopemoji=poopemoji+1
    this.setState({ count });
    this.setState({poopemoji})
  }

  render(){
    console.log(this.state);
    const {  username,avatar,post,likes, commentnumber } = this.props;
    const{count, poopemoji}=this.state
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
          
                  <img src={avatar} alt="..." className="rounded-circle" height="100" width="100" />
                 
                  <div className="col-sm-8">
                   
                    <p><b> {username} </b> Last logged in: An hour ago </p>
                   
                    {/* <p> An hour ago </p> */}
                    <button onClick={this.heartUp}><img src={hearts} alt="..." className="rounded-circle" height="30" width="30" />{this.state.count}</button>
                    <button onClick={this.heartDown}><img src={poops} alt="..." className="rounded-circle" height="30" width="30" />{this.state.poopemoji}</button>  
                  </div>
                </div>
                <div className="row">
                
                  <div className="col-8 col-sm-6">
          
                  {post.map(eachpic=>(
                    <div> 
                    <h2><img src={eachpic.postpic}alt="..." height="300" width="400" /></h2>
                    <h5>{eachpic.caption}</h5>
                    </div>
                  ))}
          
                    <h6> {likes} likes -  {commentnumber} comments </h6>
                    <h3>View Comments</h3>
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

