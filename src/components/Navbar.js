import React from 'react';
import {Link,withRouter} from 'react-router-dom';

const Navbar = (props) => {
    return(
        <nav className='nav-wrapper pink darken-4'>
            <Link to='/' className='logo left'>Information</Link>
            <ul className='right'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Person'>Person</Link></li>
            </ul>
        </nav>
    )
}
export default withRouter (Navbar);