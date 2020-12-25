import react from 'react';
import './style.css'

function Navbar() {
    return (
        <div className={'menu'}>
            <ul >
                <li>
                    About Me
                </li>
                <li>
                    Projects
                </li>
                <li>
                    Contact Me
                </li>
            </ul>
        </div>
    )
}

export default Navbar;