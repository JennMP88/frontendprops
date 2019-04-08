import React from 'react';
// import AuthContext from '../contexts/auth';
import '../styles/home2.css';
// const defaultuser = require('../assets/user.png')
// const placeholder = require('../assets/placeholder.jpg')

// ---- Contexts
import AuthContext from '../contexts/auth';

const Home = ({username,avatar,post,likes, commentnumber}) => {
  // console.log({user})
  return(
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
                   
                    <p><b> {username}  </b> </p>
                   
                    <p> An hour ago </p>
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
    
  )
  }


export default Home;



//   render() {
//     return (
//       <div className='boxworld'>
//         <AuthContext.Consumer>
//           {
//             (user) => {
//               if (user) {
//                 return (
//                   <>
//                     <h2>Welcome back, {user.email}</h2>
//                     <h4>Your ID is: {user.uid}</h4>




//                     <div class="container">
//                       <div className='boxed'>
//                         <div class="row">

//                           <img src={defaultuser} alt="..." class="rounded-circle" height="100" width="100" />
//                           <div class="col-sm-8">
//                             <p><b> Lala Sanchez  </b> </p>
//                             <p> An hour ago </p>
//                           </div>
//                         </div>
//                         <div class="row">
//                           <div class="col-8 col-sm-6">
//                             <img src={placeholder} alt="..." height="300" width="400" />
//                             <h6> 100 likes - 30 comments </h6>
//                             <h5>caption..</h5>
//                           </div>

//                         </div>
//                       </div>
//                     </div>


                  

       

//                   </>
//                 )
//               } else {
//                 return <h2>You are not logged in.</h2>
//               }
//             }
//           }
//         </AuthContext.Consumer>
//       </div>

//     )
//   }
// }