import React from 'react'
import AuthContext from '../contexts/auth';
import '../styles/search.css';
// import Searchbox from './searchbox';
import peoplelist from '../api';

// const defaultuser = require('../assets/user.png')
// const placeholder = require('../assets/placeholder.jpg')
class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            searchTerm: '',
            searchitems: [],
            avatar:'',
            user:'',
            list:peoplelist,
            display:[]

        }
    }

 onNameChange = (e) => {
        
        // const typed = e.target.value;
        // const apiList = (list) => {
        //   const results = this.state.peoplelist.filter(peoplelist => peoplelist.toLowerCase().includes(list)) //the e is the list
        //   this.setState({ display: results })
        // }
        // if (typed.length === 0) {
        //   this.setState({ display: [] })
        // }
        // else if (isNaN(typed)) {
        //   apiList(typed)
        // }
        // else {
        //   const index = Number(typed) - 1
        //   const results = [this.state.peoplelist[index]]
        //   this.setState({ display: results })

          this.setState({ peoplelist: e.target.value })
        }


//  onNameChange = (e) => {
//         this.setState({ searchTerm: e.target.value })
       
//   }

buttonSubmitted = (e) => {
        this.loadApi(this.state.searchTerm.toLowerCase())
    }

//---------------

render(){  
    console.log('break',this.state)
//    console.log(this.state)
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
 }
}
export default Search
