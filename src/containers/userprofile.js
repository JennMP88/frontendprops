import React from 'react';
import AuthContext from '../contexts/auth';
import '../styles/userprofile.css';
// const defaultuser = require('../assets/user.png')
const placeholder = require('../assets/placeholder.jpg')



const Userprofile = ({avatar,username,postpic}) => {
    // console.log({user})
        return (
            <AuthContext.Consumer>
                {
                    (user) => {
                        if (user) {
                            return (<>
                                <div className="container">
                                    <div className="row .d-flex">
                                        <img src={avatar} alt="..." className="rounded-circle" height="200" width="200" />
                                        <div className="col-sm-8">
                                            <h3> {username} </h3>
                                            <p> Followers: 129 </p>
                                            <p> Following: 2</p>
                                            <p> <button type="button" className="btn btn-dark">Follow</button>  </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">


                                
                                    <div className="col-sm-4">
                                        <div className="card">
                                            <div className="card-body">
                                                <img src={placeholder} alt="..." />
                                            </div>
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


export default Userprofile




//-------------------
// const Userprofile = ({ user, avatar, post, likes, commentnumber }) => {
//     // console.log({user})
//     return (
//         <AuthContext.Consumer>
//             {
//                 (user) => {
//                     if (user) {
//                         return (<>
//                             <div className="container">
//                                 <div className='boxed'>
//                                     <div className="row">

//                                         <img src={avatar} alt="..." className="rounded-circle" height="100" width="100" />
//                                         <div className="col-sm-8">

//                                             <p><b> {user}  </b> </p>

//                                             <p> An hour ago </p>
//                                         </div>
//                                     </div>
//                                     <div className="row">

//                                         <div className="col-8 col-sm-6">

//                                             {post.map(eachpic => (
//                                                 <div>
//                                                     <h2><img src={eachpic.postpic} alt="..." height="300" width="400" /></h2>
//                                                     <h5>{eachpic.caption}</h5>
//                                                 </div>
//                                             ))}

//                                             <h6> {likes} likes -  {commentnumber} comments </h6>

//                                         </div>

//                                     </div>
//                                 </div>
//                             </div>
//                         </>)
//                     } else {
//                         return <h2>You are not logged in.</h2>
//                     }
//                 }
//             }
//         </AuthContext.Consumer>

//     )
// }


// export default Userprofile;