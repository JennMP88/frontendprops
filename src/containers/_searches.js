import React from 'react'
import AuthContext from '../contexts/auth';
import '../styles/search.css';
// import Searchbox from './searchbox';

// const defaultuser = require('../assets/user.png')
// const placeholder = require('../assets/placeholder.jpg')
class Search extends React.Component {

    state = {
        searchTerm: '',
        searchitems: [],
        avatar:'',
        user:''
    }

searchInput=(e)=>{
        // this.loadApi({this.state.searchTerm})
    }
 onNameChange = (e) => {
        this.setState({ searchTerm: e.target.value })
       
    }

buttonSubmitted = (e) => {
        this.loadApi(this.state.searchTerm)
    }

//---------------

render(){  
   
    return (
        <AuthContext.Consumer>
            {
                (user) => {
                    if (user) {
                        return (
                            <>
                            <form>
                                  <input className="box" type="search" id="search" placeholder="Search" onChange={this.onNameChange} />
                            
                                    <input className='searchButton' type='submit' value='Search' />
                            </form>
                            
                            <div className="container border black">
                            <div className="row .d-flex">
                            <img src={this.state.avatar} alt="..." className="rounded-circle" height="200" width="200" />
                            <div className="col-sm-8">
                            <p>  <div className="col name"> {this.state.user}</div></p>
                            </div>
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
}}
export default Search
