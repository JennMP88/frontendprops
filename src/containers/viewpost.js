import React from 'react';
import AuthContext from '../contexts/auth';
import '../styles/viewpost.css';
import peoplelist from "../api"
import ImageService from '../services/images';
const defaultuser = require('../assets/user.png')
const placeholder = require('../assets/placeholder.jpg')
const hearts = require('../assets/heart.jpg')
const poops = require('../assets/poop.jpg')

 class Viewpost extends React.Component {
  constructor (props){
    super(props)

    ImageService.init();
    const imagesArray = ImageService.getImages();

    this.state={
      count: 0,
      poopemoji: 0,
      images:imagesArray,
    }
  }

  componentWillMount() {
    localStorage.getItem('display') && this.setState({
        display: JSON.parse(localStorage.getItem('display')),
        input: ''
    })
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
    const { count, poopemoji, images } = this.state
    return (
      
        <AuthContext.Consumer>
          {
            (user) => {
              if (user) {
                return (
                  <>
                  <div className='boxworld'>
                    <div className="container">
                      <div className='boxed'>
                        <div className="row">

                          <img src={peoplelist[0].avatar} alt="..." className="rounded-circle" height="100" width="100" />
                          <div className="col-sm-8">
                            <p><b> {peoplelist[0].username} </b> </p>
                            <p> An hour ago </p>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-8 col-sm-6">


                          {  
                            images.map((e,i)=>{
                              return (<>
                            <img src={e.url} alt="..." height="300" width="400" />
                            <p> Caption : {e.caption} </p>
                            <h6> 0 likes - 1 comments </h6>
                            <h5>caption..</h5>
                            <p><button onClick={this.heartUp}><img src={hearts} alt="..." className="rounded-circle" height="30" width="30" />{this.state.count}</button> </p>
                            <p><button onClick={this.heartDown}><img src={poops} alt="..." className="rounded-circle" height="30" width="30" />{this.state.poopemoji}</button></p>

                              </>)
                            })


                          }
                           
                          </div>

                        </div>
                      </div>
                    </div>




                    <div className="container border black">
                      <div className="row .d-flex">

                        <img src={peoplelist[3].avatar} alt="..." className="rounded-circle" height="200" width="200" />
                        <div className="col-sm-8">

                          <p>  <div className="col name">{peoplelist[3].username}</div></p>
                          <p>  <div className="col">Comments</div></p>
                        </div>
                      </div>
                    </div>
                    </div>
                  </>
                )
              } else {
                return <h2>You are not logged in.</h2>
              }
            }
          }
          
        </AuthContext.Consumer>
     

    )
  }
}
export default Viewpost