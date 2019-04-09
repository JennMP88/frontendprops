import React from 'react'
import '../styles/search.css';
import peoplelist from "../api";
import AuthContext from '../contexts/auth';
const pictureholder = require('../assets/piclogo.png')




export default class Createpost extends React.Component { 
    constructor(props){

        super(props)
        this.state = {
        postComment: '',
        post:[], //--------------------send to another page?
    }
 
}
    

onTypingChange = (e) => {
    this.setState({postComment: e.target.value})
}

handleSubmit=(e)=>{
    console.log('clicked')
}

render(){  
    console.log(this.state)  
    return (
        <AuthContext.Consumer>
            {
                (user) => {
                    if (user) {
                        return (
                        <>
<div className='d-flex' >
<div className="boxes">
    <div className="jumbotron jumbotron-fluid">

       
            <div className="col col-4">
                <h1 className="display-4">Drop File</h1>
                <img src={pictureholder} alt="..." height="200" width="200" />
            </div>
        </div>
    </div>

     <div className="col-sm-8">
    <form>
        <div className="form-group">
                <label for="exampleFormControlTextarea1">Comment</label>
                <input type='text' value={this.state.postComment}  onChange={this.onTypingChange} />
                <button type="button" className="button" onClick={this.handleSubmit}>Post</button>
            </div>
        </form>
    </div>
    </div>
                        </>
                        )
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
//----------

