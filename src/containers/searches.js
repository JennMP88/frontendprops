import React, {Component} from 'react'
import '../styles/search.css';

import peoplelist from "../api"

const getPeopleList = searchTerm => {
    console.log(peoplelist, searchTerm)
    const searchedPeople = peoplelist.filter(person => {
        return person.user.indexOf(searchTerm) > -1;
    })

    return searchedPeople;
}

class Search extends React.Component { 
    state = {
        searchTerm: '',
        searchitems: [],
    }

    onNameChange = e => {
        this.setState({searchTerm: e.target.value})
    }

    doSearch = e => {
        const searchTerm = this.state.searchTerm;
        this.setState({searchTerm: ''})
        const searchList = getPeopleList(searchTerm)
        this.setState({
            searchitems: searchList,
        })
    }

    render(){
        return (<>
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
                        <span className="col name"> {person.user}</span>
                    </p>
                    </div>
                    </div>
                </div>)
            })}
        </>)
    }
}

export default Search