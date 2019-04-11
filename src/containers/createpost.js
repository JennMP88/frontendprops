import React, {Component} from 'react'
import '../styles/search.css';
import peoplelist from "../api";
import AuthContext from '../contexts/auth';
import * as firebase from 'firebase';
import ImageService from '../services/images';


//initialized firebase 
const config = {
    apiKey: "AIzaSyBmxtX94kn3zEI4LaDQSfM3j6VkdHR7KuM",
    authDomain: "newproject-abe93.firebaseapp.com",
    databaseURL: "https://newproject-abe93.firebaseio.com",
    projectId: "newproject-abe93",
    storageBucket: "newproject-abe93.appspot.com",
    messagingSenderId: "104222094620"
}; 
// firebase.initializeApp(config);

export default class Picturepost extends Component {
    constructor(props){
        super(props)
            this.state={
                input:''
            }
    }


//------------STORING FUNCTIONS FOR FIREBASE STUFF 
    saveImage = (url) => {
      const date = Date();
  
      ImageService.saveImage(url, date);
    }
  
    handleFileInput = async (e) => {
      const firstFile = e.target.files[0];
  
      const root = firebase.storage().ref()
      const newImage = root.child(firstFile.name);
  
      // newImage.put(firstFile)
      //   .then((snapshot) => {
      //     return snapshot.ref.getDownloadURL()
      //   })
      //   .then((url) => {
      //     console.log(url)
      //     this.saveImage(url);
      //   })
  
      try {
        const snapshot = await newImage.put(firstFile);
        const url = await snapshot.ref.getDownloadURL();
        this.saveImage(url);
      }
      catch(err) {
        console.log(err);
      }
      
    }
  
// Function To post a comment
    postingCommentLabel=(e)=>{
        this.setState({input:e.target.value})
    }

    postPosted=(e)=>{
        const{input}=this.state
        this.setState({input:input})
    }

    
    render() {
        console.log(this.state)
        const{input}=this.state
      return (
        <div className='container'>
          <div className="input-group mb-3">
            <div className="custom-file">
              <input type="file" className="custom-file-input" onChange={this.handleFileInput} />
              <label className="custom-file-label">Upload Image</label>
            </div>
            <div className="col-sm-8">
        <form>
            <div className="form-group">
                    <input type='text' value={this.state.input} onChange={this.postingCommentLabel}  />
                    <button type="button" onClick={this.postPosted}className="button">Post</button>
                </div>
            </form>
        </div>
          </div>
        </div>
      );
    }
  }




//--------------------
// export default class Createpost extends React.Component { 
//     constructor(props){

//         super(props)
//         this.state = {
//         postComment: '',
//         post:[], //--------------------send to another page?
//     }
 
// }
    

// onTypingChange = (e) => {
//     this.setState({postComment: e.target.value})
// }

// handleSubmit=(e)=>{
//     console.log('clicked')
// }

// render(){  
//     console.log(this.state)  
//     return (
//         <AuthContext.Consumer>
//             {
//                 (user) => {
//                     if (user) {
//                         return (
//                         <>
// <div className='d-flex' >
// <div className="boxes">
//     <div className="jumbotron jumbotron-fluid">

       
//             <div className="col col-4">
//                 <h1 className="display-4">Drop File</h1>
//                 <img src={pictureholder} alt="..." height="200" width="200" />
//             </div>
//         </div>
//     </div>

//      <div className="col-sm-8">
//     <form>
//         <div className="form-group">
//                 <label for="exampleFormControlTextarea1">Comment</label>
//                 <input type='text' value={this.state.postComment}  onChange={this.onTypingChange} />
//                 <button type="button" className="button" onClick={this.handleSubmit}>Post</button>
//             </div>
//         </form>
//     </div>
//     </div>
//                         </>
//                         )
//                     }
//                     else {
//                         return <h2>You are not logged in.</h2>
//                     }
//                 }
//             }

//         </AuthContext.Consumer>
//     )
// }
// }
// //----------

