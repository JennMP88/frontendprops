import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import firebase from './firebase';

// ---- Contexts
import AuthContext from './contexts/auth';

import peoplelist from "./api"

// ---- Pages
import Header from './components/header';
import Home from './containers/newsfeed';
import Signup from './containers/signup';
import Login from './containers/login';
import Logout from './containers/logout';
import Followlist from './containers/followlist';
import Searchlist from './containers/searches';
import Userprofile from './containers/userprofile'
// import Searchbox from './containers/searchbox';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: null,
    }
  }

  //api data retrieving for authentication portion
  //here we are assignin unsubscribe-->given a function
  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      console.log(user, this.state)
      
      if (user) {
        this.setState({ user: user.email }); //user shows user is logged in--->passed to auth context
      }
      else {
        this.setState({ user: null })
      }
    })
  }

  //invoking it to take it off memory
  componentWillUnmount() {
    this.unsubscribe()
  }

  //-------------------------FUNCTIONS
  showNewsFeed = () => {
    return (
      peoplelist.map(e => (
        <Home username={e.username} avatar={e.avatar} post={e.post} likes={e.likes} commentnumber={e.commentnumber}   />
      ))
    )
  }
  showFollowingList=()=>{
    return(
      peoplelist.map(e=>(
        <Followlist username={e.username} avatar={e.avatar} />
      ))
    )
  }
  // showSearchList=()=>{
  //   return(
      
  //   )
  // }

  //search
  // showSearch=()=>{
  //   return(
  //     data.peoplelist.map(e=>(
  //       <SearchList user={e.user} avatar={e.avatar} />
  //     ))
  //   )
  // }
  
 
  showLogOutComponent=()=>{
    return (
      
        <Logout />
      )
    
  }
  

  render() {
    return (
      <div>
        <HashRouter>
        <AuthContext.Provider value={this.state.user}>
            <Header />
            <div className='links-container' >
              <Route path='/' exact render={this.showNewsFeed}/>
              {/* <Route path='/newsfeed' render={this.showFindPersonComponent} /> */}
              <Route path='/followlist'render={this.showFollowingList} />
              <Route path='/searches'  component={Searchlist}  />  
              <Route path='/followers'render={this.showFollowList} />   
              <Route path='/userprofile' component={Userprofile} />        
              <Route path='/signup' component={Signup} />
              <Route path='/login' component={Login} />
              <Route path='/logout'render={this.showLogOutComponent} />
            </div>
          </AuthContext.Provider>
        </HashRouter>
      </div>
    );
  }
}

export default App;



















//   render() {
//     const application = this.state.user 
//       ? (<HashRouter>
//           <Route path='/' component={ Header } />
//           <div className='container mt-5'>
//             <Switch>
//               <Route path='/' exact component={ Home } />
//               <Route path='/signup' exact component={ Signup } />
//               <Route path='/login' exact component={ Login } />
//               <Route path='/following' render={(props) => <Following {...props} user={this.state.user} />} />
//               <Route path='/search' exact component={Search} />
//               <Route path='/userprofile' exact component={ Userprofile } />
//               <Route path='/createpost' exact component={ Createpost } />
//               <Route path='/logout' exact component={ Logout } />
//               <Route path='/viewpost' exact component={ Viewpost } />
//               <Route path='/follower' exact component={ Follower } />
//               <Route component={ Error404 } />
//             </Switch>
//           </div>
//         </HashRouter>)
//       : <h2>You are not looged in.</h2>
    
//     return application
//   }
// }

// export default App;