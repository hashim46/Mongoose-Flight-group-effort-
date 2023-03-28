
import React from 'react'

const Navbar = () => {
    return ( 
        <nav>
            <ul>
                <li>
                    <a href="/flights">Home</a>
                </li>
                <li>
                    <a href="/flights/new">Create A Flight</a>
                </li>
            </ul>
        </nav>
     );
}
 
export default Navbar;