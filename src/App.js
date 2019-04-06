import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
// import firebase from './firebase';


// ---- Pages
import data from './api';
import Header from './components/header';
import Home from './containers/newsfeed';
import Followlist from './containers/followlist';
import axios from 'axios'

class App extends Component {

  //FUNCTIONS
  showFindPersonComponent = () => {
    return (
      data.peoplelist.map(e => (
        <Home username={e.username} avatar={e.avatar} />
      ))
    )
  }

  render() {
    return (
      <div>
        <HashRouter>
          <>
            <Header />
            <div className='links-container' >
              <Route path='/' exact component={this.showFindPersonComponent}/>
              <Route path='/newsfeed' render={this.showFindPersonComponent} />
              <Route path='/followlist'  />
            </div>
          </>
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