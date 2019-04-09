import React, {Component}from 'react'
import '../styles/search.css';
import peoplelist from "../api"
import AuthContext from '../contexts/auth';


const getPeopleList = searchTerm => {
    console.log(peoplelist, searchTerm)
    const searchedPeople = peoplelist.filter(person => {
        return person.username.indexOf(searchTerm) > -1;
    })

    return searchedPeople;
}

class Search extends Component { 
    constructor(props){

        super(props)
        this.state = {
        searchTerm: '',
        searchitems: [],
    }
 
}
  
// onNameChange = (e) => {
        
//     const typed = e.target.value;
//     const apiList = (list) => {
//       const results = this.state.peoplelist.filter(peoplelist => peoplelist.toLowerCase().includes(list)) //the e is the list
//       this.setState({ display: results })
//     }
//     if (typed.length === 0) {
//       this.setState({ display: [] })
//     }
//     else if (isNaN(typed)) {
//       apiList(typed)
//     }
//     else {
//       const index = Number(typed) - 1
//       const results = [this.state.peoplelist[index]]
//       this.setState({ display: results })

//       this.setState({ peoplelist: e.target.value })
//     }

onNameChange = e => {
    // const {searchTerm}=this.state
    // searchTerm.toLowerCase()
    this.setState({searchTerm: e.target.value})
}

doSearch = e => {
    console.log('this is clicked')
    const searchTerm = this.state.searchTerm;
    this.setState({searchTerm: ''})
    const searchList = getPeopleList(searchTerm)
    this.setState({
        searchitems: searchList,
    })
}


render(){
const {searchTerm,searchitems}=this.state;
return(
    
    <AuthContext.Consumer>
    {
        (user)=>{
            if(user){
                return(<>
            <form onSubmit={e => e.preventDefault()}>
                <input className="box" type="search" id="search" placeholder="Search" onChange={this.onNameChange} value={this.state.searchTerm} />
                <input className='searchButton' type='submit' value='Search' onClick={this.doSearch} />
            </form>
            {this.state.searchitems.map(person => {
                return ( <div className="container border black">
                    <div className="row .d-flex">
                    <img src={person.avatar} alt="..." className="rounded-circle" height="200" width="200" />
                    <div className="col-sm-8">
                    <p> 
                        <span className="col name"> {person.username}</span>
                    </p>
                    </div>
                    </div>
                </div>)
            })}
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
export default Search







