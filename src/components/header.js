
import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/newsfeed'>Newsfeed</Link>
            <Link to='/followlist'>Follow</Link>
        </div>
    )
}

export default Header